import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Practice Porter`,
        siteUrl: `https://www.practiceporter.ca`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "@chakra-ui/gatsby-plugin",
        {
            resolve: "gatsby-source-contentful",
            options: {
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                spaceId: process.env.CONTENTFUL_SPACE_ID ?? "dimwdxeylbq0",
                forceFullSync: true,
                host: process.env.CONTENTFUL_HOST ?? "cdn.contentful.com",
                richText: {
                    resolveFieldLocales: true,
                },
            },
        },
        // {
        //     resolve: "gatsby-plugin-graphql-codegen",
        //     options: {
        //         fileName: `./src/graphql/generated.ts`, // or any path you prefer
        //     },
        // },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-emotion",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Practice Porter",
                start_url: "/",
                icon: "src/images/favicon.png",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
    ],
};

export default config;
