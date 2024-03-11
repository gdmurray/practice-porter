import React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { Page } from "@/components/Page";
import { SEOHead } from "@/components/SeoMetadata";

const AboutPage: React.FC<PageProps> = ({ data }) => {
    return <Page data={data} />;
};

export default AboutPage;
// export const Head: HeadFC = ({ data }) => {
//     return <SEOHead data={data} />;
// };

export const query = graphql`
    query {
        contentfulPage(slug: { eq: "about" }) {
            id
            header {
                ...HeaderComponent
            }
            body {
                __typename
                ...HeroComponent
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
