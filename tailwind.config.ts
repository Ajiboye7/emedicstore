import type { Config } from "tailwindcss";
import { Categories } from "./components";

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
        CategoryBorder1: '#083C6B',
        CategoryBorder2: '#0CDD6C',
        categoryTextTitle: '#0D63B2'

      },
      gradientColorStops: {
        'header-start': '#0D63B2',
        'header-end': '#0CDD6C',
      },
      fontSize:{
        'perkHead' :'1.2rem',
        'perkBody' :'1.5rem',
        'perkBodyLg' :'1.3rem',
        'perkBodyMd' :'1.2rem',
        'textTitle':'5.5rem',
        'headerBody': '1.4rem',
        'conTitle' : '5.2rem',
        'conBody' : '1.3rem'

      },
    },
  },
  plugins: [],
};
export default config;
