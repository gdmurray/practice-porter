import React from "react";
import { graphql, type PageProps } from "gatsby";
import { Page } from "@/components/Page";

const FeaturesPage: React.FC<PageProps> = ({ data }) => {
    return <Page data={data} />;
};

export default FeaturesPage;
export { Head } from "@/components/Page";

export const query = graphql`
    query {
        contentfulPage(slug: { eq: "features" }) {
            ...PageComponent
        }
    }
`;
