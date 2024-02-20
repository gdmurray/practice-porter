import type { GatsbyNode } from "gatsby";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
const sharp = require("sharp");

sharp.cache(false);
sharp.simd(false);

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
    actions,
}) => {
    actions.setWebpackConfig({
        resolve: {
            plugins: [new TsconfigPathsPlugin()],
            // Add the directories where webpack should look for modules
            modules: ["node_modules", "src"],
            // Alias configuration
            alias: {
                // Alias for handlebars
                handlebars: "handlebars/runtime.js",
            },
            // Fallback configuration (assuming you're using Webpack 5, you might need to adjust for Webpack 4)
            fallback: {
                path: require.resolve("path-browserify"),
            },
        },
        module: {
            rules: [
                {
                    test: /\.(handlebars|hbs)$/,
                    loader: "handlebars-loader",
                },
            ],
        },
    });
};
