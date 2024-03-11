// eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            rel="preload"
            href="/fonts/GeneralSans-Variable.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="generalSansFont"
        />,
        <link
            rel={"icon"}
            href={"/favicon-light.png"}
            type={"image/png"}
            key={"favicon"}
        />,
    ]);
};
