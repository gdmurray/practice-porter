import * as React from "react";
import { graphql, type PageProps } from "gatsby";
import { Page } from "@/components/Page";

const IndexPage: React.FC<PageProps> = ({ data }) => {
    return <Page data={data} />;
};

export default IndexPage;
export { Head } from "@/components/Page";

export const query = graphql`
    query {
        contentfulPage(slug: { eq: "landing-page" }) {
            ...PageComponent
        }
    }
`;
