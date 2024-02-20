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
        },
    });
};
