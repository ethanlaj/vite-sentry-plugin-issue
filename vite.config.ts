import { defineConfig } from "vite";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    sentryVitePlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: "librum",
      project: "doenba-ui",
    }),
  ],
});
