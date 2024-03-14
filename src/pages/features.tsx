import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { Layout } from "@/components/Layout";
import * as sections from "../components/sections";
import { Page } from "@/components/Page";
import { SEOHead } from "@/components/SeoMetadata";
import styled from "@emotion/styled";

const OverrideDiv = styled.div`
    .duplex p {
        font-size: 18px;
    }
`;
const FeaturesPage: React.FC<PageProps> = ({ data }) => {
    return (
        <OverrideDiv>
            <Page data={data} />
        </OverrideDiv>
    );
};

export default FeaturesPage;
export const Head: HeadFC = ({ data }) => {
    return <SEOHead data={data} />;
};

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
            seo {
                ...SeoComponent
            }
        }
    }
`;
