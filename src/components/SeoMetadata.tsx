import React from "react";
import { graphql } from "gatsby";

export const SEOHead = ({ data }) => {
    const { seo } = data.contentfulPage;
    const { seoTitle, description, keywords, image, no_index: noIndex } = seo;
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
            {keywords && <meta name="keywords" content={keywords} />}
            {/* Use the following meta tag if you want to prevent this page from being indexed */}
            {noIndex && <meta name="robots" content="noindex" />}
            <meta property="og:title" content={seoTitle} />
            {image && <meta property="og:image" content={image.url} />}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={seoTitle} />
            {description && (
                <meta name="twitter:description" content={description} />
            )}
            {image && <meta name="twitter:image" content={image.url} />}
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
