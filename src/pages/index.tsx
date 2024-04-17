import type { GetStaticProps } from "next";
import { Stack, Heading } from "@chakra-ui/react";
import { BreweryCards, HappyHourAlert, PageLayout } from "@/components";
import { getBreweries } from "@/lib/breweryApi";
import { Brewery } from "@/types";

interface Props {
  allBreweries: Brewery[];
  californiaBreweries: Brewery[];
}

export default function Home({ allBreweries, californiaBreweries }: Props) {
  return (
    <PageLayout>
      <HappyHourAlert />

      <Stack gap={6}>
        <Heading as="h1" fontSize="4xl" lineHeight="110%">
          Todas las opciones
        </Heading>
        <BreweryCards breweries={allBreweries} />
      </Stack>

      <Stack gap={6}>
        <Heading fontSize="4xl" lineHeight="110%" fontWeight="semibold">
          Opciones en California
        </Heading>
        <BreweryCards breweries={californiaBreweries} />
      </Stack>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const allBreweries = await getBreweries();
    const californiaBreweries = await getBreweries("/?by_state=california");

    if (!allBreweries?.length || !californiaBreweries?.length) {
      return { notFound: true };
    }

    return {
      props: { allBreweries, californiaBreweries },
      revalidate: 10,
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};
