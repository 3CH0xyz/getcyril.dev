import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        // Dark Mode System (Anthropic-inspired)
        'dark-bg': '#0f0f0f',
        'dark-surface': '#1a1a1a',
        'dark-border': '#2a2a2a',
        'dark-text': '#f5f5f5',
        'dark-text-secondary': '#d0d0d0',

        // Cyril Brand Colors (UPDATED: Orange primary, removed teal)
        cyril: {
          orange: {
            DEFAULT: '#d97757',
            light: '#e08862',
            dark: '#c86847',
          },
          // Legacy teal removed - now using orange as primary
        },

        // Agent Colors (PRESERVED - unchanged)
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

        // Terminal Chrome Colors (macOS)
        terminal: {
          red: '#ff5f57',
          yellow: '#ffbd2e',
          green: '#28ca42',
        },

        // Syntax Highlighting
        syntax: {
          keyword: '#d97757', // Orange for keywords
          string: '#4ade80', // Green for strings
          comment: '#616161', // Gray for comments
          function: '#60a5fa', // Blue for functions
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
          "Fira Code",
          "JetBrains Mono",
          "SF Mono",
          "Monaco",
          "Cascadia Code",
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
        "float-slow": "floatSlow 15s ease-in-out infinite",
        "float-slower": "floatSlower 18s ease-in-out infinite",
        float: "float 12s ease-in-out infinite",
        drift: "drift 20s ease-in-out infinite",
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
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(40px, -40px) scale(1.08)" },
          "50%": { transform: "translate(-30px, 30px) scale(0.92)" },
          "75%": { transform: "translate(30px, 20px) scale(1.05)" },
        },
        floatSlower: {
          "0%, 100%": { transform: "translate(0, 0) scale(1) rotate(0deg)" },
          "33%": { transform: "translate(-50px, 40px) scale(1.1) rotate(5deg)" },
          "66%": { transform: "translate(40px, -30px) scale(0.9) rotate(-5deg)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(100px, -100px) scale(1.15)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
