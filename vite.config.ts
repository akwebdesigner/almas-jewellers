// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages serves the site from a subpath (https://<user>.github.io/almas-jewellers/).
// The GH Actions workflow sets GITHUB_PAGES=true so the base path + static prerender
// are only applied there, leaving the Lovable preview/publish build untouched.
const isGithubPages = process.env["GITHUB_PAGES"] === "true";

export default defineConfig({
  vite: {
    base: isGithubPages ? "/almas-jewellers/" : "/",
  },
  // GitHub Pages is static hosting: skip the Nitro server bundle entirely so
  // TanStack Start emits its own prerender-capable server output.
  ...(isGithubPages ? { nitro: false as const } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    ...(isGithubPages ? {} : { server: { entry: "server" } }),
    ...(isGithubPages
      ? {
          // Emit static HTML for every route so GitHub Pages can serve it without a server.
          prerender: { enabled: true, crawlLinks: true },
        }
      : {}),
  },
});
