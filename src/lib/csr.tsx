import React from "react";
import ReactDOM from "react-dom";
import Page from "../page";

const rehydrate = () => {
    // get initial page props from server rendered json script
    const dataTag = document.querySelector<HTMLScriptElement>(
        "script#__SSR_DATA__"
    );
    const ssrData = JSON.parse(dataTag?.textContent ?? "null");

    // render in client side, pass in initial page props
    ReactDOM.render(
        <Page {...ssrData?.pageProps} />,
        document.getElementById("root")
    );
};

rehydrate();
