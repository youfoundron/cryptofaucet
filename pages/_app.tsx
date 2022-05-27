import "../styles/globals.css";
import PlausibleProvider from "next-plausible";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="cryptofaucet.dev" trackLocalhost>
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}
export default MyApp;
