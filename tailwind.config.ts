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
        primaryButtonBg: ' #0D63B2',
        secondaryButtonBg: '#FCFCFC',
        bodyText: '#788190',
        primaryGradientStart: '#0CDD6C',
        primaryGradientEnd: '#0D63B2 ',
        btnTextSecondary: '#FCFCFC',
        btnTextPrimary :' #0D63B2',
        perkTitle: '#083C6B',
      },
      gradientColorStops: {
        'header-start': '#0D63B2',
        'header-end': '#0CDD6C',
      },
      fontSize:{
        'perkHead' :'1.4rem',
      },
    },
  },
  plugins: [],
};
export default config;
