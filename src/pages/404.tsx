import Link from "next/link";
import { Button, Heading, Text } from "@chakra-ui/react";
import { PageLayout } from "@/components";

function PageNotFound() {
  return (
    <PageLayout title="404 Página no encontrada - Brew Finder">
      <Heading as="h1" fontSize="4xl" lineHeight="110%">
        Error 404
      </Heading>
      <Text>Página no encontrada</Text>
      <Button as={Link} href="/" variant={"gradient"}>
        Volver a página principal
      </Button>
    </PageLayout>
  );
}

export default PageNotFound;
