import { ChakraProvider } from "@chakra-ui/react";
import Navigation from "../components/navigation/navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navigation />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
