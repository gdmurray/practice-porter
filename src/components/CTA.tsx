import React from "react";
import { graphql } from "gatsby";
import { Heading, Stack, Text } from "@chakra-ui/react";
import { ContentfulComponentFeatureBlock } from "@/components/sections";
import { RichText } from "@/components/RichText";
// import { CtaComponentFragment } from "@/graphql/generated";

// direction = Column.. Stacked
// Direction = Row... columns? lol

enum FeaturesOrientation {
    VERTICAL = "Vertical",
    HORIZONTAL = "Horizontal",
}

export default function CTA(props) {
    console.log("CTA Props: ", props);
    return (
        <Stack
            p={8}
            maxW={"6xl"}
            w={"full"}
            alignSelf={"center"}
            textAlign={"center"}
            gap={8}
            {...(props.anchor != null ? { id: props.anchor } : {})}
        >
            <Stack gap={8}>
                <Heading as={"h2"}>{props.title}</Heading>
                {props.description && props.description.description && (
                    <Text fontSize={"xl"} variant={"secondary"}>
                        {props.description.description}
                    </Text>
                )}
            </Stack>
            {props.features && (
                <Stack
                    direction={
                        props.featuresOrientation ===
                        FeaturesOrientation.HORIZONTAL
                            ? "row"
                            : "column"
                    }
                    gap={"4"}
                    sx={{
                        "& > div": {
                            flexGrow: 1,
                            flexBasis: 0,
                        },
                    }}
                >
                    {props.features.map((elem) => {
                        return (
                            <ContentfulComponentFeatureBlock
                                key={elem.id}
                                {...elem}
                            />
                        );
                    })}
                </Stack>
            )}
            {props.content && (
                <div>
                    <RichText {...props.content} />
                </div>
            )}
        </Stack>
    );
}

export const query = graphql`
    fragment CTAComponent on ContentfulComponentCta {
        title
        description {
            description
        }
        content {
            raw
            references {
                ... on ContentfulComponentActionItem {
                    ...ActionItemComponent
                    contentful_id
                    internal {
                        type
                    }
                }
                ... on ContentfulCustomComponent {
                    ...CustomComponent
                    contentful_id
                    internal {
                        type
                    }
                }
            }
        }
        featuresOrientation
        features {
            ...FeatureBlockComponent
            contentful_id
            internal {
                type
            }
        }
        align
        boxed
        anchor
        #        features {
        #            fields {
        #                title {
        #                    en_US
        #                }
        #                description {
        #                    en_US
        #                }
        #            }
        #        }
        #        featuresOrientation
    }
`;
