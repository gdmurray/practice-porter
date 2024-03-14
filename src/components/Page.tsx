import React, { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Stack, useColorMode } from "@chakra-ui/react";
import * as sections from "@/components/sections";
import { debugProps } from "@/modules/debug";

export const Page = ({ data }: { data: any }) => {
    // const { colorMode } = useColorMode();
    debugProps("Page", data);

    // useEffect(() => {
    //     // Function to change the favicon
    //     const changeFavicon = (mode: string) => {
    //         const faviconLink: HTMLAnchorElement | null =
    //             document.querySelector("link[rel*='icon']");
    //         if (faviconLink) {
    //             faviconLink.href =
    //                 mode === "dark"
    //                     ? "/favicon-dark.png"
    //                     : "/favicon-light.png";
    //         }
    //     };
    //
    //     // Change the favicon when the color mode changes
    //     changeFavicon(colorMode);
    // }, [colorMode]); // Only re-run the effect if colorMode changes

    const { body, header, footer } =
        data.contentfulPage as Queries.ContentfulPage;
    if (header == null) {
        return <></>;
    }
    if (footer == null) {
        return <></>;
    }
    return (
        <>
            <Layout header={header} footer={footer}>
                <Stack gap={"12"}>
                    {body?.map((elem) => {
                        const {
                            id,
                            __typename: typeName,
                            ...componentProps
                        } = elem as any;
                        const Component =
                            sections[typeName as keyof typeof sections] || null;
                        if (Component != null) {
                            console.log("ID: ", id);
                            return <Component key={id} {...componentProps} />;
                        }
                        console.error("Could not find component: ", typeName);
                        return <></>;
                    })}
                </Stack>
            </Layout>
        </>
    );
};
