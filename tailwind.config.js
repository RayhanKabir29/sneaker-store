module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-maybe": "var(--blue-maybe)",
        "darkgrey-2": "var(--darkgrey-2)",
        "gray-maybe": "var(--gray-maybe)",
        purewhite: "var(--purewhite)",
        white: "var(--white)",
        "yellow-maybe": "var(--yellow-maybe)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "copy-body-1": "var(--copy-body-1-font-family)",
        "copy-button": "var(--copy-button-font-family)",
        "open-sans-regular-14px": "var(--open-sans-regular-14px-font-family)",
        "open-sans-semibold-14px": "var(--open-sans-semibold-14px-font-family)",
        "open-sans-semibold-16px": "var(--open-sans-semibold-16px-font-family)",
        "regular-12": "var(--regular-12-font-family)",
        "rubik-12px": "var(--rubik-12px-font-family)",
        "rubik-16px": "var(--rubik-16px-font-family)",
        "rubik-20px": "var(--rubik-20px-font-family)",
        "rubik-24px": "var(--rubik-24px-font-family)",
        "rubik-32px": "var(--rubik-32px-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
