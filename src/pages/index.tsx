import type { GetStaticProps } from "next";
import { Heading } from "@chakra-ui/react";
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

      <Heading as="h1" fontSize="4xl">
        Todas las opciones
      </Heading>
      <BreweryCards breweries={allBreweries} />

      <Heading fontSize="4xl" fontWeight="semibold">
        Opciones en California
      </Heading>
      <BreweryCards breweries={californiaBreweries} />
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
