import Head from "next/head";
import { Roboto } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import { Header, BottomTabs } from "@/componnets";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface Props {
  title?: string;
  children: JSX.Element;
}

function PageLayout({ title = "Brew finder", children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChakraProvider>
        <div className={roboto.className}>
          <Header />
          <main>{children}</main>
          <BottomTabs /> 
        </div>
      </ChakraProvider>
    </>
  );
}

export default PageLayout;
