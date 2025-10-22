import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cyril Brand Colors
        cyril: {
          teal: "#2D7D8E", // Primary brand color
          orange: "#C15F3C", // Heritage (Claude connection)
        },
        // Agent Colors
        agent: {
          architect: "#8B5CF6", // Purple
          researcher: "#F59E0B", // Amber
          implementer: "#14B8A6", // Teal
          reviewer: "#0EA5E9", // Sky Blue
          tester: "#84CC16", // Lime
          debugger: "#FB923C", // Orange
          deployer: "#10B981", // Emerald
          documenter: "#6366F1", // Indigo
        },
        // Semantic Colors
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",
        // Dark Mode Neutrals
        dark: {
          base: "#1A1A2E",
          charcoal: "#2D2D44",
          slate: "#4A4A5E",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "SF Mono",
          "Monaco",
          "Cascadia Code",
          "Roboto Mono",
          "Consolas",
          "Courier New",
          "monospace",
        ],
      },
      fontSize: {
        xs: ["0.64rem", { lineHeight: "1.4" }], // 10px
        sm: ["0.8rem", { lineHeight: "1.5" }], // 13px
        base: ["1rem", { lineHeight: "1.6" }], // 16px
        md: ["1.25rem", { lineHeight: "1.5" }], // 20px
        lg: ["1.563rem", { lineHeight: "1.4" }], // 25px
        xl: ["1.953rem", { lineHeight: "1.3" }], // 31px
        "2xl": ["2.441rem", { lineHeight: "1.2" }], // 39px
        "3xl": ["3.052rem", { lineHeight: "1.2" }], // 49px
        "4xl": ["3.815rem", { lineHeight: "1.1" }], // 61px
      },
      spacing: {
        "1": "0.25rem", // 4px
        "2": "0.5rem", // 8px
        "3": "0.75rem", // 12px
        "4": "1rem", // 16px
        "5": "1.25rem", // 20px
        "6": "1.5rem", // 24px
        "8": "2rem", // 32px
        "10": "2.5rem", // 40px
        "12": "3rem", // 48px
        "16": "4rem", // 64px
        "20": "5rem", // 80px
        "24": "6rem", // 96px
        "32": "8rem", // 128px
      },
      borderRadius: {
        sm: "3px",
        DEFAULT: "6px",
        md: "8px",
        lg: "12px",
      },
      animation: {
        "fade-in": "fadeIn 300ms ease-out",
        "slide-in": "slideIn 300ms ease-out",
        "scale-up": "scaleUp 200ms ease-out",
        pulse: "pulse 2s ease-in-out infinite",
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
