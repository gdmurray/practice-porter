import React from "react";
import { graphql } from "gatsby";
import { Stack, Text } from "@chakra-ui/react";
import { LazyIcon } from "@/components/LazyIcon";
// import { FeatureBlockComponentFragment } from "@/graphql/generated";
import { TablerIconsProps } from "@tabler/icons-react";

enum FeatureBlockLayout {
    VERTICAL = "Vertical",
    HORIZONTAL = "Horizontal",
}

export default function FeatureBlock(props) {
    console.log("feature block props: ", props);
    console.log("Feature Block Icon: ", props.icon);
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
        >
            {props.icon != null ? (
                <LazyIcon
                    iconName={props.icon}
                    props={props.iconAttributes as unknown as TablerIconsProps}
                />
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
    }
`;
