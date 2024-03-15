import * as React from "react";
import { graphql, type PageProps } from "gatsby";
import { Page } from "@/components/Page";

const LegalPage: React.FC<PageProps> = ({ data }) => {
    return <Page data={data} />;
};

export default LegalPage;
export { Head } from "@/components/Page";

export const query = graphql`
    query {
        contentfulPage(slug: { eq: "legal" }) {
            ...PageComponent
        }
    }
`;
