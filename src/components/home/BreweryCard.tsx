import Image from "next/image";
import NextLink from "next/link";
import { BiMap } from "react-icons/bi";
import { MdLocalPhone } from "react-icons/md";
import { Heading, Stack, Card, Flex, Text, Button } from "@chakra-ui/react";
import { Brewery } from "@/types";

const image =
  "https://images.unsplash.com/photo-1516458464372-eea4ab222b31?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function BreweryCard({ id, name, street, phone }: Brewery) {
  return (
    <Card
      as="article"
      minWidth="328px"
      backgroundColor="dark.700"
      borderRadius="lg"
      padding={"1rem"}
      gap={"1rem"}
    >
      <Heading fontSize="xl" noOfLines={1}>
        {name}
      </Heading>

      <Flex alignItems={"center"} gap={2}>
        <Image
          src={image}
          width="72"
          height="72"
          alt={`Imagen de ${name}`}
          style={{
            width: 72,
            height: 72,
            objectFit: "cover",
            borderRadius: 9999,
          }}
        />

        {/* detalles */}
        <Stack>
          <Flex gap={2} alignItems={"center"}>
            <BiMap title="Ubicación" fontSize="1.5rem" />
            <Text fontSize="sm">{street}</Text>
          </Flex>
          <Flex gap={2} alignItems={"center"}>
            <MdLocalPhone title="Número de teléfono" fontSize="1.5rem" />
            <Text fontSize="sm">{phone}</Text>
          </Flex>
        </Stack>
      </Flex>

      <Button
        as={NextLink}
        href={`/breweries/${id}`}
        size="sm"
        width={{ base: "85%" }}
        marginInline="auto"
        variant="gradient"
      >
        Ver más
      </Button>
    </Card>
  );
}

export default BreweryCard;
