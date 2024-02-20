import React from "react";
import { graphql } from "gatsby";
import { Box, Stack, Text } from "@chakra-ui/react";
import { LazyIcon } from "@/components/LazyIcon";
// import { FeatureBlockComponentFragment } from "@/graphql/generated";
import { TablerIconsProps } from "@tabler/icons-react";

enum FeatureBlockLayout {
    VERTICAL = "Vertical",
    HORIZONTAL = "Horizontal",
}

// TODO: Implement Image Icon

export default function FeatureBlock(props) {
    console.log("Feature Props: ", props);
    const iconHeight = props.iconAttributes?.size || 24;
    console.log("Icon Height: ", iconHeight);
    const boxHeight = iconHeight + iconHeight * 0.25;

    function getIconBackgroundProps(props) {
        if (props.iconBackground) {
            return {
                borderRadius: `${boxHeight}px`,
                background: props.iconBackground,
            };
        }
        return {};
    }
    return (
        <Stack
            direction={
                props.layout === FeatureBlockLayout.VERTICAL ? "column" : "row"
            }
            alignItems={
                props.layout === FeatureBlockLayout.VERTICAL
                    ? "center"
                    : "flex-start"
            }
            gap={4}
        >
            {props.icon != null ? (
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
            ) : (
                <div>Image or Icon</div>
            )}
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
        iconBackground
    }
`;
