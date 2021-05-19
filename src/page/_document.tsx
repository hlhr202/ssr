import React from "react";

interface IProps {
    __SSR_DATA__: { pageProps: any };
}

export const Document: React.FC<IProps> = (props) => {
    return (
        <html>
            <head></head>
            <body>
                <div id="root">{props.children}</div>

                {/* server initial props dehydrated/rehydrated here */}
                <script
                    id="__SSR_DATA__"
                    type="application/json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(props.__SSR_DATA__),
                    }}
                />
                <script src="/_ssr_/assets/index.js" type="text/javascript" />
            </body>
        </html>
    );
};
