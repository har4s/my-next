import "styles/styles.scss";
import React from "react";
import type { AppProps } from "next/app";
import { ManagedUI, FontGlobalCSS } from "components/ui";

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);
  return (
    <>
      <FontGlobalCSS />
      <ManagedUI>
        <Component {...pageProps} />
      </ManagedUI>
    </>
  );
}
