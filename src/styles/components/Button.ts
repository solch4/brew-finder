import { defineStyleConfig } from "@chakra-ui/react";
import { getColor, mode } from "@chakra-ui/theme-tools";

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "lg",
    transition: "0.3s",
  },

  sizes: {
    sm: {
      fontSize: "md",
      fontWeight: "semibold",
      px: 3,
      py: 1,
    },
    md: {
      fontSize: "md",
      fontWeight: "bold",
      px: 5,
      py: 6,
    },
  },

  variants: {
    gradient: (props) => {
      const { theme, fromcolor, tocolor } = props;
      const lgFrom = getColor(theme, fromcolor);
      const lgTo = getColor(theme, tocolor);
      return {
        background: `linear-gradient(90deg, ${lgFrom}, ${lgTo}) border-box`,
        _hover: {
          background: `linear-gradient(120deg, ${lgFrom}, ${lgTo}) border-box`,
          filter: "brightness(1.2)",
        },
      };
    },
    "outline-gradient": (props) => {
      const { theme, fromcolor, tocolor } = props;
      const lgFrom = getColor(theme, fromcolor);
      const lgTo = getColor(theme, tocolor);
      const bgColor = getColor(theme, mode("white", "dark.800")(props));

      return {
        border: "1px solid transparent",
        background: `linear-gradient(${bgColor}, ${bgColor}) padding-box, 
        linear-gradient(90deg, ${lgFrom}, ${lgTo}) border-box`,
        _hover: {
          background: `linear-gradient(${bgColor}, ${bgColor}) padding-box, 
          linear-gradient(120deg, ${lgFrom}, ${lgTo}) border-box`,
          filter: "brightness(1.2)",
        },
      };
    },
  },

  defaultProps: {
    size: "md",
    variant: "gradient",
  },
});
