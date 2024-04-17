import Head from "next/head";
import { Roboto } from "next/font/google";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import { Header, BottomTabs } from "@/components";
import theme from "@/styles/theme";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

interface Props {
  title?: string;
  children: React.ReactNode;
}

function PageLayout({ title = "Brew finder", children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Encuentra cervecerías en tu zona." />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <ChakraProvider theme={theme}>
        <Header />
        <Stack as="main" spacing={8} padding={"1rem"} flex={1}>
          {children}
        </Stack>
        <BottomTabs />
      </ChakraProvider>

      <style jsx global>
        {`
          :root {
            --font-roboto: ${roboto.style.fontFamily};
          }
        `}
      </style>
    </>
  );
}

export default PageLayout;
