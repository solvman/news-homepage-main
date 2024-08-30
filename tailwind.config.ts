import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "site-sm": "var(--site-font-size-sm)",
        "site-md": "var(--site-font-size-md)",
        "site-lg": "var(--site-font-size-lg)",
        "site-xl": "var(--site-font-size-xl)",
        "site-2xl": "var(--site-font-size-2xl)",
        "site-3xl": "var(--site-font-size-3xl)",
        "site-4xl": "var(--site-font-size-4xl)",
      },
      fontWeight: {
        "site-normal": "var(--site-font-weight-normal)",
        "site-bold": "var(--site-font-weight-bold)",
        "site-black": "var(--site-font-weight-black)",
      },
      colors: {
        primary: "hsl(var(--color-primary), <alpha-value>)",
        "primary-foreground":
          "hsl(var(--color-primary-foreground), <alpha-value>)",
        "primary-foreground-muted":
          "hsl(var(--color-primary-foreground-muted), <alpha-value>)",
        "primary-inverted": "hsl(var(--color-primary-inverted), <alpha-value>)",
        "primary-inverted-foreground":
          "hsl(var(--color-primary-inverted-foreground), <alpha-value>)",
        "primary-inverted-foreground-muted":
          "hsl(var(--color-primary-inverted-foreground-muted), <alpha-value>)",
        accent: "hsl(var(--color-accent), <alpha-value>)",
        "accent-inverted": "hsl(var(--color-accent-inverted), <alpha-value>)",
        site: {
          "primary-1": "hsl(var(--site-color-primary-1), <alpha-value>)",
          "primary-2": "hsl(var(--site-color-primary-2), <alpha-value>)",
          "neutral-100": "hsl(var(--site-color-neutral-100), <alpha-value>)",
          "neutral-200": "hsl(var(--site-color-neutral-200), <alpha-value>)",
          "neutral-600": "hsl(var(--site-color-neutral-600), <alpha-value>)",
          "neutral-900": "hsl(var(--site-color-neutral-900), <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
