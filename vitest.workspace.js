import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    extends: "./vite.config.js",
    test: {
      include: ["**/*.node.test.{js,jsx}"],
      name: "happy-dom",
      environment: "happy-dom",
      coverage:
        // ["text", "json", "html"],
        {
          provider: "istanbul",
          reporter: ["text", "json", "html"],
        },
    },

    resolve: {
      alias: {
        "react-dom/client": "react-dom/client", // ensures vite resolves correctly
      },
    },
  },
  {
    extends: "./vite.config.js",
    test: {
      setupFiles: ["vitest-browser-react"],
      include: ["**/*.browser.test.{js,jsx}"],
      name: "browser",
      coverage:
        // ["text", "json", "html"],
        {
          provider: "istanbul",
          reporter: ["text", "json", "html"],
        },
      browser: {
        provider: "playwright",
        enabled: true,
        name: "chromium", // you can use chromium or webkit here too
      },
    },
    resolve: {
      alias: {
        "react-dom/client": "react-dom/client", // ensures vite resolves correctly
      },
    },
  },
]);
