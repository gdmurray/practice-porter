import React from "react";
import { graphql } from "gatsby";
import { Stack, Text } from "@chakra-ui/react";

enum FeatureBlockLayout {
    VERTICAL = "Vertical",
    HORIZONTAL = "Horizontal",
}

export default function FeatureBlock(props) {
    console.log("feature block props: ", props);
    return (
        <Stack
            direction={
                props.layout === FeatureBlockLayout.VERTICAL ? "column" : "row"
            }
        >
            <div>Icon</div>
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
