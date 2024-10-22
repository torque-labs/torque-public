import type { Config } from "tailwindcss";
import sharedConfig from "@torque-labs/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["**/*.tsx"],
  prefix: "torque-",
  presets: [sharedConfig],
};

export default config;
