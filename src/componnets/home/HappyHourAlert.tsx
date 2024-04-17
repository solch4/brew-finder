import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  LightMode,
} from "@chakra-ui/react";

function HappyHourAlert() {
  return (
    <LightMode>
      <Alert
        status="warning"
        variant="left-accent"
        // width + ml usados para ignorar padding de elemento padre
        width={"calc(100% + 2rem)"}
        ml={"-1rem"}
      >
        <AlertIcon />

        <Box color={"gray.700"}>
          <AlertTitle>Happy Hour</AlertTitle>
          <AlertDescription>16:00 - 17:00 hs MEX</AlertDescription>
        </Box>
      </Alert>
    </LightMode>
  );
}

export default HappyHourAlert;
