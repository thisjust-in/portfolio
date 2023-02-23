import { extendTheme } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: "#16161D",
        _dark: "#0d2411",
      },
      heroGradientStart: {
        default: "#f5700b",
        _dark: "#3f3244",
      },
      heroGradientEnd: {
        default: "#e97e41",
        _dark: "#eed113",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
});

export default theme;
