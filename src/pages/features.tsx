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
                    console.log("Typename: ", typeName);
                    const Component = sections[typeName] || null;
                    console.log("Component: ", Component);
                    // return <>Scontent of {typeName}</>;
                    if (Component != null) {
                        return <Component key={id} {...componentProps} />;
                    }
                    return <>NOT FOUND</>;
                })}
            </Stack>
            <Box>Features content goes here</Box>
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
