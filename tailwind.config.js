import {
  maxWidth as _maxWidth,
  borderRadius as _borderRadius,
} from "tailwindcss/defaultTheme";

const generateArray = (start, end, step) => {
  const length = +(end - start / step).toFixed(0);
  return Array.from(
    { length },
    (_, index) => +(start + index * step).toFixed(1)
  );
};

const scaleEntries = (oldEntries, scalingFactor = 1.6) => {
  const newEntries = oldEntries.slice(0, 10).map(([key, val]) => {
    const numericVal = val.match(/^(\d+(\.\d+)?)/g)[0];
    const newVal = +(numericVal * scalingFactor).toFixed(1); // This is to counteract the setting of 1rem = 10px;
    return [key, `${newVal}rem`];
  });
  return Object.fromEntries(newEntries);
};

const spacingSteps = generateArray(0, 1200, 1);
const newSpacingEntries = spacingSteps.map(step => {
  return [`${step}`, `${(step / 10).toFixed(1)}rem`];
});
const spacingOptions = Object.fromEntries(newSpacingEntries);

export const content = ["./src/**/*.{html,js,tsx,ts}", "./index.html"];
export const theme = {
  extend: {
    colors: {
      "navy-blue": {
        400: "#C6C7CB",
        500: "#6F737D",
        600: "#626C82",
        700: "#262B39",
        800: "#1B202F",
        900: "#070F21",
      },
      cyan: {
        200: "#60DDC3",
        300: "#22CFAB",
        500: "#1B9F88",
        600: "#098381",
        700: "#077573",
        900: "#1C323B",
      },
      white: {
        50: "#FFF",
        100: "#F4F4F4",
        200: "#EBEBEB",
        300: "#E6E6E6",
        400: "#B4B4B4",
        DEFAULT: "#FFF",
      },
      blue: {
        50: "#DFF2FF",
        400: "#23A5FF",
        500: "#4096F0",
        900: "#0057A7",
      },
      "dark-blue": {
        900: "#052143",
      },
      green: {
        600: "#09A432",
        700: "00994F",
      },
      "light-green": {
        50: "EAF9F4",
        200: "74DAB5",
        300: "#4FD2A2",
      },
      red: {
        100: "#FFD7DC",
        300: "#FF6175",
        400: "#FC3D5F",
        700: "DE072E",
        800: "452436",
      },
      "red-bright": {
        500: "#FC543D",
      },
      yellow: {
        500: "#F5DD28",
        700: "#DCC410",
        800: "#373822",
      },
      "bord-gradient": {
        cyan: "#22CFAB",
        blue: "#0057A7",
      },
      "skeleton-gradient": {
        color1: "#262B39",
        color2: "#3B4256",
      },
      layout: {
        backgroud: "#070F21",
        level1: "#1B202F",
        level2: "#262B39",
        "level1-opacity": "#1B202FCC",
      },
      primary: {
        "bg-default": "#22CFAB",
        "bg-hover": "#60DDC3",
        "bg-secondary": "#1C323B",
        "fg-default": "#070F21",
      },
      secondary: {
        "bg-default": "#1B202F",
        "bg-hover": "#262B39",
      },
      disabled: {
        "bg-primary": "#626C82",
        "bg-secondary": "#262B39",
        "fg-primary": "#262B39",
        "fg-secondary": "#626C82",
      },
      content: {
        secondary: "#C6C7CB",
        DEFAULT: "#FFF",
      },
      stroke: {
        interactive: "#626C82",
        DEFAULT: "#262B39",
      },
      "bord-blue": {
        DEFAULT: "#0057A7",
      },
      "bord-red": {
        bg: "#452436",
        DEFAULT: "#FF6175",
      },
      "bord-yellow": {
        bg: "#373822",
        DEFAULT: "#F5DD28",
      },
      informative: {
        "bg-primary": "#23A5FF",
        "fg-primary": "#052143",
        "bg-opacity": "#23A5FF1A",
      },
      success: {
        DEFAULT: "#00994F",
        "bg-opacity": "#09A4321A",
      },
      warning: {
        DEFAULT: "#DCC410",
        "bg-opacity": "#DCC4101A",
      },
      danger: {
        DEFAULT: "#FC543D",
        "bg-opacity": "#FC543D1A",
      },
    },
    spacing: () => {
      return spacingOptions;
    },
    minWidth: {
      ..._maxWidth,
      ...spacingOptions,
    },
    maxWidth: {
      ..._maxWidth,
      ...spacingOptions,
    },
    borderRadius: () => {
      const oldEntries = Object.entries(_borderRadius);
      return scaleEntries(oldEntries);
    },
    fontSize: {
      base: ["1.6rem", "2.4rem"],
      xss: ["1rem", "1.302rem"],
      xs: ["1.2rem", "1.6rem"],
      sm: ["1.4rem", "2rem"],
      lg: ["1.8rem", "2.8rem"],
      xl: ["2rem", "2.8rem"],
      "2xl": ["2.4rem", "3.2rem"],
      "3xl": ["3rem", "3.6rem"],
      "4xl": ["3.6rem", "4rem"],
      "5xl": ["4.8rem", "4.8rem"],
      "6xl": ["6rem", "6rem"],
      "7xl": ["7.2rem", "7.2rem"],
      "bord-h1": [
        "3.2rem",
        {
          lineHeight: "4.2rem",
          fontWeight: "700",
        },
      ],
      "bord-h2": [
        "2rem",
        {
          lineHeight: "2.6rem",
          fontWeight: "700",
        },
      ],
      "bord-subtitle": ["1.6rem", { lineHeight: "2.1rem" }],
      "bord-md": ["1.4rem", { lineHeight: "1.8rem" }],
      "bord-sm": ["1.2rem", { lineHeight: "1.5rem" }],
      "bord-caption": ["1rem", { lineHeight: "1.3rem" }],
    },
    boxShadow: {
      "4x": "0 0.4rem 0.5rem rgba(0, 0, 0, 0.08)",
    },
    screens: {
      xs: "400px",
      xl: "1440px",
      "2xl": "1920px",
    },
  },
};
export const plugins = [];
