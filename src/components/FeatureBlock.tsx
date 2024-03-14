import React from "react";
import { graphql } from "gatsby";
import { Box, Stack, Text } from "@chakra-ui/react";
import { LazyIcon } from "@/components/LazyIcon";
// import { FeatureBlockComponentFragment } from "@/graphql/generated";
import { TablerIconsProps } from "@tabler/icons-react";
import { Asset } from "@/components/Asset";
import { debugProps } from "@/modules/debug";

export enum FeatureBlockLayout {
    VERTICAL = "Vertical",
    HORIZONTAL = "Horizontal",
}

type FeatureBlockProps = Queries.FeatureBlockComponentFragment & {
    overrideFeatureOrientation?: FeatureBlockLayout | null;
};
export default function FeatureBlock(props: FeatureBlockProps) {
    debugProps("FeatureBlock", props);
    const iconHeight = props.iconAttributes?.size || 24;
    const boxHeight = iconHeight + iconHeight * 0.25;

    function getIconBackgroundProps(props: FeatureBlockProps) {
        if (props.iconBackground) {
            return {
                borderRadius: `${boxHeight}px`,
                background: props.iconBackground,
            };
        }
        return {};
    }

    const featureBlockOrientation =
        props.overrideFeatureOrientation != null
            ? props.overrideFeatureOrientation
            : props.layout;

    function getFeatureImage(props: FeatureBlockProps) {
        if (props.icon != null) {
            return (
                <Box
                    w={`${boxHeight}px`}
                    h={`${boxHeight}px`}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexShrink={0}
                    {...getIconBackgroundProps(props)}
                >
                    <LazyIcon
                        iconName={props.icon}
                        props={
                            props.iconAttributes as unknown as TablerIconsProps
                        }
                    />
                </Box>
            );
        }
        if (props.image) {
            return (
                <Asset props={props.image} contentProps={{ width: "250px" }} />
            );
        }
    }

    return (
        <Stack
            direction={
                featureBlockOrientation === FeatureBlockLayout.VERTICAL
                    ? "column"
                    : "row"
            }
            alignItems={
                featureBlockOrientation === FeatureBlockLayout.VERTICAL
                    ? "center"
                    : "flex-start"
            }
            gap={4}
        >
            {getFeatureImage(props)}
            <Stack>
                <Text fontSize="xl" fontWeight={"medium"}>
                    {props.title}
                </Text>
                {props.description && props.description.description && (
                    <Text variant={"secondary"} fontSize={"md"}>
                        {props.description.description}
                    </Text>
                )}
            </Stack>
        </Stack>
    );
}

export const query = graphql`
    fragment FeatureBlockComponent on ContentfulComponentFeatureBlock {
        id
        title
        description {
            description
        }
        layout
        icon
        iconAttributes {
            size
            stroke
            color
        }
        image {
            ...AssetComponent
        }
        iconBackground
    }
`;
