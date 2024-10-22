import { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--torque-${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: { site_gradient: "url(/bg.jpg)" },
      fontFamily: {
        jakarta: ["Jakarta", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--torque-border))",
        input: "hsl(var(--torque-input))",
        ring: "hsl(var(--torque-ring))",
        background: "hsl(var(--torque-background))",
        foreground: "hsl(var(--torque-foreground))",
        primary: {
          DEFAULT: "hsl(var(--torque-primary))",
          foreground: "hsl(var(--torque-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--torque-secondary))",
          foreground: "hsl(var(--torque-secondary-foreground))",
        },
        error: {
          DEFAULT: "hsl(var(--torque-error))",
        },
        destructive: {
          DEFAULT: "hsl(var(--torque-destructive))",
          foreground: "hsl(var(--torque-destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--torque-muted))",
          foreground: "hsl(var(--torque-muted-foreground))",
          background: "hsl(var(--torque-muted-background))",
        },
        accent: {
          DEFAULT: "hsl(var(--torque-accent))",
          foreground: "hsl(var(--torque-accent-foreground))",
        },
        highlight: "hsl(var(--torque-highlight))",
        popover: {
          DEFAULT: "hsl(var(--torque-popover))",
          foreground: "hsl(var(--torque-popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--torque-card))",
          foreground: "hsl(var(--torque-card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--torque-radius) - 2px)",
        sm: "calc(var(--torque-radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    addVariablesForColors,
  ],
};

export default config;
