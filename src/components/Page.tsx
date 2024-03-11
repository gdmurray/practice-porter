import React from "react";
import { SEOHead } from "@/components/SeoMetadata";
import { Layout } from "@/components/Layout";
import { Stack } from "@chakra-ui/react";
import * as sections from "@/components/sections";

export const Page = ({ data }) => {
    console.log("Page Props: ", data);
    const { body, header, footer, seo } = data.contentfulPage;
    return (
        <>
            <Layout header={header} footer={footer}>
                <Stack gap={"12"}>
                    {body.map((elem) => {
                        const {
                            id,
                            __typename: typeName,
                            ...componentProps
                        } = elem;
                        const Component =
                            sections[typeName as keyof typeof sections] || null;
                        if (Component != null) {
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
