import React from "react";
import { graphql } from "gatsby";

export const SEOHead = ({ data }: { data: any }) => {
    const { seo } = data.contentfulPage as Queries.ContentfulPage;

    const {
        seoTitle,
        description,
        keywords,
        image,
        no_index: noIndex,
        no_follow: noFollow,
    } = seo ?? {
        seoTitle: "Practice Porter",
        description: "Practice Porter",
        keywords: ["Practice Porter"],
        image: { url: "src/images/favicon-light.png" },
        no_index: false,
        no_follow: false,
    };

    return (
        <>
            <meta charSet="utf-8" />
            <title>{seoTitle}</title>
            {description && (
                <meta
                    name="description"
                    property="og:description"
                    content={description}
                />
            )}
            {keywords && <meta name="keywords" content={keywords.join(",")} />}
            {/* Use the following meta tag if you want to prevent this page from being indexed */}
            {noIndex && <meta name="robots" content="noindex" />}
            {noFollow && <meta name="robots" content="nofollow" />}
            <meta property="og:title" content={seoTitle ?? "Practice Porter"} />
            {image && (
                <meta
                    property="og:image"
                    content={image.url ?? "src/images/favicon-light.png"}
                />
            )}
            <meta name="twitter:card" content="summary" />
            <meta
                name="twitter:title"
                content={seoTitle ?? "Practice Porter"}
            />
            {description && (
                <meta name="twitter:description" content={description} />
            )}
            {image && (
                <meta
                    name="twitter:image"
                    content={image.url ?? "src/images/favicon-light.png"}
                />
            )}
        </>
    );
};

export const query = graphql`
    fragment SeoComponent on ContentfulSeoMetadata {
        seoTitle
        description
        keywords
        no_index
        no_follow
        image {
            url
        }
    }
`;
