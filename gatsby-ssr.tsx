import React from "react";
import { RenderBodyArgs } from "gatsby";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./src/@chakra-ui/gatsby-plugin/theme";

export const onRenderBody = ({
    setHeadComponents,
    setPreBodyComponents,
}: RenderBodyArgs) => {
    setHeadComponents([
        <link
            rel="preload"
            href="/fonts/GeneralSans-Variable.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="generalSansFont"
        />,
    ]);
    setPreBodyComponents([
        <ColorModeScript
            key={"colormode"}
            initialColorMode={theme.config.initialColorMode}
        />,
    ]);
};
