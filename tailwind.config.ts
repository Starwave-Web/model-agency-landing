import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textStrokeWidth: {
        "1": "1px",
        "2": "2px",
        "3": "3px",
        "4": "4px",
      },
      backgroundImage: {
        "navbar-bg": "linear-gradient(to top right, #1C1D1F 0%, #28292C 50%, #1C1D1F 100%)",
        "btn-primary": "linear-gradient(to bottom, #D0B48C 0%, #BFA27D 100%)",
        "btn-outline": "linear-gradient(to bottom, #D0B48C 0%, #FFFFFF 100%)",
        "featured-card": "linear-gradient(to bottom, #D0B48C 0%, #FCFEF0 100%)",
        "btn-arrow": "linear-gradient(to bottom, #FCFEF0 0%, #D0B48C 100%)",
        "btn-hover": "linear-gradient(to bottom, #C0A681 0%, #A58C6C 100%)",
        "btn-active": "linear-gradient(to bottom, #9F8B6D 0%, #967F63 100%)",
        "contact-form-border": "linear-gradient(to top right, #D0B48C 0%, #FCFEF0 50%, #D0B48C 100%)",

        "result-carousel-fade": "linear-gradient(to right, #12131400 0%, #12131426 58%, #12131440 69%, #121314BF 83%, #121314F2 100%)",

        "text-primary":
          "linear-gradient(to top right, #D0B48C 0%, #FCFEF0 50%, #E8DCC2 100%)",
        "text-secondary":
          "linear-gradient(to top right, #D0B48C 0%, #FCFEF0 100%)",
        "hero-bg": "url('/images/hero-bg.png')",
        "featured-marble-bg": "url('/images/featured-marble-bg.png')",
        "marble-bg-big": "url('/images/marble-bg-big.png')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "primary-black": "#1C1D1F",
        "featured-card-bg": "#28292C",
      },
      fontSize: {
        btn: [
          "1.3125rem",
          {
            fontWeight: "600",
            lineHeight: "normal",
            letterSpacing: "0px",
          },
        ],
        "btn-mobile": [
          "1.25rem",
          {
            fontWeight: "600",
            lineHeight: "100%",
            letterSpacing: "0px",
          },
        ],
        h1: [
          "6rem",
          {
            fontWeight: "600",
            lineHeight: "100%",
          },
        ],
        "h1-mobile": [
          "3rem",
          {
            fontWeight: "600",
            lineHeight: "100%",
          },
        ],
        h2: [
          "4.5rem",
          {
            fontWeight: "600",
            lineHeight: "4.6875rem",
          },
        ],
        "h2-mobile": [
          "2.25rem",
          {
            fontWeight: "600",
            lineHeight: "2.75rem",
          },
        ],
        h3: [
          "4rem",
          {
            fontWeight: "600",
            lineHeight: "110%",
          },
        ],
        "h3-mobile": [
          "2rem",
          {
            fontWeight: "600",
            lineHeight: "110%",
          },
        ],
        "services-link": [
          "2rem",
          {
            fontWeight: "600",
            lineHeight: "100%",
          },
        ],
        "services-link-mobile": [
          "1rem",
          {
            fontWeight: "600",
            lineHeight: "100%",
          },
        ],
        "sub-title": [
          "2.25rem",
          {
            fontWeight: "600",
            lineHeight: "100%",
          },
        ],
        "sub-title-mobile": [
          "1.125rem",
          {
            fontWeight: "600",
            lineHeight: "100%",
          },
        ],
        "services-menu": [
          "2rem",
          {
            fontWeight: "600",
            lineHeight: "100%",
          },
        ],
        "services-menu-mobile": [
          "1rem",
          {
            fontWeight: "600",
            lineHeight: "100%",
          },
        ],
        h4: [
          "3rem",
          {
            fontWeight: "600",
            lineHeight: "100%",
          },
        ],
        "h4-mobile": [
          "1.5rem",
          {
            fontWeight: "600",
            lineHeight: "100%",
          },
        ],
        navigation: [
          "1rem",
          {
            fontWeight: "600",
            lineHeight: "100%",
          },
        ],
        description: [
          "1rem",
          {
            fontWeight: "600",
            lineHeight: "100%",
          },
        ],
        "contact-form-label": [
          "1rem",
          {
            fontWeight: "600",
            lineHeight: "100%",
          },
        ],
        "contact-form-text": [
          "1.25rem",
          {
            fontWeight: "400",
            lineHeight: "100%",
          },
        ],
        "form-text": [
          "1.5rem",
          {
            fontWeight: "400",
            lineHeight: "100%",
          },
        ],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
