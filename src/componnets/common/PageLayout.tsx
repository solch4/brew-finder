import Head from "next/head";
import { Roboto } from "next/font/google";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import { Header, BottomTabs } from "@/componnets";
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChakraProvider theme={theme}>
        <Header />
        <Stack spacing={6} padding={"1rem"} flex={1}>
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
