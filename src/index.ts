import express from "express";
import path from "path";
import { buildCSR } from "../script/build-csr";
import { handle } from "./lib/ssr";

const app = express();

const startServer = async () => {
    console.log("building client assets...");

    // generate client side js assets
    await buildCSR();
    
    // serve client side js assets under /__SSR__ path
    app.use("/_ssr_", express.static(path.join(__dirname, "../.ssr")));
    
    // handle server response (SSR) for the first-time
    app.get("/", handle);
    
    app.listen(3010, () => console.log("server started at http://localhost:3010"));
};

startServer();
