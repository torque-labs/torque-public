// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@torque-labs/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "'../../packages/ui/**/*.{js,ts,jsx,tsx}',",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  // content: ["./src/app/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
