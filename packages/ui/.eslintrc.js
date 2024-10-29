/** @type {import("eslint").Linter.Config} */

module.exports = {
  root: true,
  extends: ["@torque-labs/eslint-config/react.js"],
  parserOptions: {
    project: true,
  },
  plugins: ["tailwindcss", "prettier", "@typescript-eslint"],
  settings: {
    tailwindcss: {
      callees: ["cn", "cva"],
      config: "tailwind.config.ts",
    },
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "tailwind.config.ts",
    ".eslintrc.js",
    ".prettierrc.js",
    "tsup.config.ts"
  ],
};
