import { graphql } from "gatsby";
import React from "react";
import { Flex, Heading, Stack } from "@chakra-ui/react";
import { RichText } from "@/components/RichText";
import { Asset } from "@/components/Asset";
import { debugProps } from "@/modules/debug";

enum DuplexAlign {
    LEFT = "Left",
    RIGHT = "Right",
}

export default function Duplex(props: Queries.DuplexComponentFragment) {
    debugProps("Duplex", props);
    return (
        <Stack
            direction={{
                base: "column",
                md: props.align === DuplexAlign.RIGHT ? "row" : "row-reverse",
            }}
            {...(props.anchor != null ? { id: props.anchor } : {})}
        >
            <Flex p={8} flex={1} align={"center"} justify={"center"}>
                <Stack spacing={8} w={"full"} maxW={"lg"}>
                    <Heading as={"h3"}>{props.title}</Heading>
                    <RichText {...(props.description as unknown as any)} />
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Asset
                    props={props.image as Queries.AssetComponentFragment}
                    contentProps={{ objectFit: "contain" }}
                />
            </Flex>
        </Stack>
    );
}

export const query = graphql`
    fragment DuplexComponent on ContentfulComponentDuplex {
        id
        title
        description {
            raw
            references {
                ...FeatureBlockComponent
                contentful_id
                internal {
                    type
                }
            }
        }
        image {
            ...AssetComponent
        }
        align
        anchor
    }
`;
