import { GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { BiMap } from "react-icons/bi";
import { MdLocalPhone } from "react-icons/md";
import {
  Box,
  Button,
  Flex,
  Heading,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { PageLayout, ReviewCard } from "@/components";
import { getBreweries, getBreweryById } from "@/lib/breweryApi";
import { images, reviews } from "@/data";
import { Brewery } from "@/types";

function Detail({ name, street, phone }: Brewery) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <PageLayout>
        <Spinner mx="auto" size="xl" />
      </PageLayout>
    );
  }

  return (
    <PageLayout title={`${name} - Brew finder`}>
      <Heading as="h1" fontSize="4xl">
        {name}
      </Heading>

      {/* ubicación + teléfono */}
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

      {/* imágenes */}
      {/* width + ml usados para ignorar padding de elemento padre */}
      <Box width={"calc(100% + 2rem)"} ml={"-1rem"}>
        <Flex gap={2} overflowX="scroll" paddingInline={"1rem"}>
          {images.map((image) => (
            <Image
              src={image}
              height="104"
              width="156"
              alt="brewery"
              style={{
                height: 104,
                width: "auto",
                objectFit: "cover",
                borderRadius: 8,
              }}
              key={image}
            />
          ))}
        </Flex>
      </Box>

      {/* comentarios */}
      <Heading fontSize="2xl" fontWeight="semibold">
        Opiniones
      </Heading>
      <Stack spacing={4}>
        {reviews.map((review) => (
          <ReviewCard {...review} key={review.id} />
        ))}
      </Stack>

      {/* buttons (reserva + transporte) */}
      <Stack spacing={6}>
        <Button variant="gradient">Reservar mesa</Button>
        <Button variant="outline-gradient">Opciones de transporte</Button>
      </Stack>
    </PageLayout>
  );
}

export default Detail;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const breweryId = (params?.id as string) ?? "";
    const brewery = await getBreweryById(breweryId);

    if (!brewery) return { notFound: true };

    return {
      props: { ...brewery },
      revalidate: 10,
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};

export const getStaticPaths = async () => {
  // únicamente obtengo y genero pags para las primeras 10 cervecerías de cada categoría
  const allBreweries = await getBreweries("/?per_page=10");
  const californiaBreweries = await getBreweries(
    "/?by_state=california&per_page=10"
  );
  const breweries = [...allBreweries, ...californiaBreweries];
  const paths = breweries.map((brewery) => ({ params: { id: brewery.id } }));

  return {
    paths,
    fallback: true,
  };
};
