import Page, { getStaticProps } from "../page";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { Document } from "../page/_document";
import type { Handler } from "express";

export const handle: Handler = async (req, res, next) => {
    // get initial page props
    const { props } = await getStaticProps();

    // send dehydrated full html
    res.send(`<!DOCTYPE html>
${ReactDOMServer.renderToString(
    <Document __SSR_DATA__={{ pageProps: props }}>
        <Page {...props} />
    </Document>
)}`);
};
