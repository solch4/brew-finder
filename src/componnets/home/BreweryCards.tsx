import { Box, Flex } from "@chakra-ui/react";
import { BreweryCard } from "@/componnets";
import { Brewery } from "@/types";

interface Props {
  breweries: Brewery[];
}

function BreweryCards({ breweries }: Props) {
  return (
    // width + ml usados para ignorar padding de elemento padre
    <Box width={"calc(100% + 2rem)"} ml={"-1rem"}>
      <Flex gap={2} overflowX="scroll" paddingInline={"1rem"}>
        {breweries.map((brewery) => (
          <BreweryCard {...brewery} key={brewery.id} />
        ))}
      </Flex>
    </Box>
  );
}

export default BreweryCards;
