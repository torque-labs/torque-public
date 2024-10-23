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
      callees: ["cn"],
      config: "tailwind.config.ts",
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  ignores: [".eslintrc.js", "*.config.tailwind.ts"],
};
