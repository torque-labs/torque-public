import type { Config } from "tailwindcss";
import sharedConfig from "@torque-labs/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig],
  prefix: "torque-",
};

export default config;
