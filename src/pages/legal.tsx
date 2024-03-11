import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { Page } from "@/components/Page";
import { SEOHead } from "@/components/SeoMetadata";

const LegalPage: React.FC<PageProps> = ({ data }) => {
    return <Page data={data} />;
};

export default LegalPage;
export const Head: HeadFC = ({ data }) => {
    return <SEOHead data={data} />;
};

export const query = graphql`
    query {
        contentfulPage(slug: { eq: "legal" }) {
            id
            header {
                ...HeaderComponent
            }
            body {
                __typename
                ...HeroComponent
                ...DuplexComponent
                ...CTAComponent
                ...CustomComponent
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