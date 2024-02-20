import React from "react";
import { graphql } from "gatsby";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
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

    function getStackProps(props) {
        if (props.align === "Center") {
            return {
                alignSelf: "center",
                textAlign: "center",
            };
        }
        if (props.align === "Right") {
            return {
                flexDir: "row-reverse",
            };
        }

        if (props.align === "Left") {
            return {
                flexDir: "row",
            };
        }
    }

    function getAdditionalStyles(props) {
        if (props.styles && props.styles.internal.content) {
            return JSON.parse(props.styles.internal.content);
        }
        return {};
    }

    function getParentFlexProps(props) {
        if (props.background) {
            return {
                background: props.background,
                w: "99vw",
                justifyContent: "center",
            };
        }

        return {};
    }

    return (
        <Flex alignSelf={"center"} {...getParentFlexProps(props)}>
            <Stack
                p={8}
                maxW={"6xl"}
                w={"full"}
                {...getStackProps(props)}
                {...getAdditionalStyles(props)}
                alignSelf={"center"}
                // textAlign={"center"}
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
        </Flex>
    );
}

export const query = graphql`
    fragment CTAComponent on ContentfulComponentCta {
        title
        description {
            description
        }
        background
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
        styles {
            internal {
                content
            }
        }
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
