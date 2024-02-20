import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { graphql } from "gatsby";
import { Layout } from "@/components/Layout";
import * as sections from "../components/sections";

const FeaturesPage = ({ data }) => {
    const { body, header, footer } = data.contentfulPage;
    console.log("Features Page Body: ", body);
    return (
        <Layout header={header} footer={footer}>
            <Stack gap={"12"}>
                {body.map((elem) => {
                    const {
                        id,
                        __typename: typeName,
                        ...componentProps
                    } = elem;
                    const Component = sections[typeName] || null;
                    if (Component != null) {
                        return <Component key={id} {...componentProps} />;
                    }
                    console.error("Could not find component: ", typeName);
                    return <></>;
                })}
            </Stack>
        </Layout>
    );
};

export default FeaturesPage;

export const query = graphql`
    query {
        contentfulPage(slug: { eq: "features" }) {
            id
            header {
                ...HeaderComponent
            }
            body {
                __typename
                ...HeroComponent
                ...DuplexComponent
                ...CTAComponent
            }
            footer {
                ...FooterComponent
            }
        }
    }
`;
