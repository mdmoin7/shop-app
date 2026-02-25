/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563EB",
          dark: "#1E40AF",
        },
      },

      keyframes: {
        quantityPulse: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.25)", opacity: "0.6" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },

        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },

      animation: {
        quantityPulse: "quantityPulse 300ms ease-in-out",
        shimmer: "shimmer 1.5s linear infinite",
      },

      backgroundImage: {
        shimmer:
          "linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 37%, #e5e7eb 63%)",
        shimmerDark:
          "linear-gradient(90deg, #374151 25%, #4b5563 37%, #374151 63%)",
      },

      typography: {
        DEFAULT: {
          css: {
            color: "#374151",
            a: {
              color: "#2563EB",
              "&:hover": {
                color: "#1E40AF",
              },
            },
          },
        },
        dark: {
          css: {
            color: "#D1D5DB",
            a: {
              color: "#60A5FA",
            },
            strong: {
              color: "#FFFFFF",
            },
          },
        },
      },
    },
  },

  plugins: [
    forms({
      strategy: "class", // safer than global reset
    }),
    typography,
  ],
};
