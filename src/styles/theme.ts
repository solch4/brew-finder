import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";
import { Button } from "./components/Button";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const typography = {
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2rem",
    "5xl": "2.25rem",
    "6xl": "3rem",
  },
  fonts: {
    heading: "var(--font-roboto)",
    body: "var(--font-roboto)",
  },
};

const theme = extendTheme({
  config,
  ...typography,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("white", "dark.800")(props),
        color: mode("black", "white")(props),
      },
      'html, body': {
        height: '100%',
      },
      "#__next": {
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
      }
    })
  },
  components: {
    Button,
  },
  colors: {
    primary: "#3540E8",
    secondary: "#E41AD6",
    dark: {
      700: "#13132D",
      800: "#010316",
      900: "#040210",
    },
  },
});

export default theme;
