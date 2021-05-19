import esbuild from "esbuild";
import path from "path";

export const buildCSR = async () => {
    const result = await esbuild.build({
        bundle: true,
        platform: "browser",
        minify: true,
        entryPoints: {
            index: path.resolve(__dirname, "../src/lib/csr.tsx"),
        },
        outdir: path.resolve(__dirname, "../.ssr/assets"),
    });
    return result;
};
