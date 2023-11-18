import { defineConfig } from "cypress";
import coverage from "@cypress/code-coverage/task";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      coverage(on, config);
      return config;
    },
    baseUrl: "http://localhost:5173/",
  },
});
