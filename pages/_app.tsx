import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import LayoutWrapper from "../utils/WebpageWrap";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
