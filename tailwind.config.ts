import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            default: {
              //Black
              DEFAULT: "#000",
            },
            foreground: {
              //White
              DEFAULT: "#FFF",
            },
            background: {
              //Light Beige
              100: "#F6E9DC",
              300: "#F4E1D0",
              500: "#F1DAC4",
              700: "#C1AE9D",
              900: "#918376",
              DEFAULT: "#F1DAC4",
            },
            primary: {
              //Orange Creamsicle
              100: "#FFB8A3",
              300: "#FFA184",
              500: "#FF8965",
              700: "#CC6E51",
              900: "#99523D",
              DEFAULT: "#FF8965",
            },
            secondary: {
              //Dark Blue
              100: "#9192AB",
              300: "#6C6D8F",
              500: "#474973",
              700: "#323351",
              900: "#24253A",
              DEFAULT: "#474973",
            },
          },
        },
      },
    }),
  ],
};
export default config;
