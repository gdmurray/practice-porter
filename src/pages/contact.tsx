import { Layout } from "@/components/Layout";
import * as sections from "@/components/sections";
import React from "react";
import { Stack } from "@chakra-ui/react";
import { graphql } from "gatsby";

const ContactPage = ({ data }) => {
    const { body, header, footer } = data.contentfulPage;
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
        </Layout>
    );
};

export default ContactPage;

export const query = graphql`
    query {
        contentfulPage(slug: { eq: "contact" }) {
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
