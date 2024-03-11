import React from "react";
import { graphql } from "gatsby";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { ContentfulComponentFeatureBlock } from "@/components/sections";
import { RichText } from "@/components/RichText";
import { debugProps } from "@/modules/debug";

// direction = Column.. Stacked
// Direction = Row... columns? lol

type CTAProps = Queries.CTAComponentFragment;

enum FeaturesOrientation {
    VERTICAL = "Vertical",
    HORIZONTAL = "Horizontal",
}

export default function CTA(props: CTAProps) {
    debugProps("CTA", props);

    function getStackProps(props: CTAProps) {
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

    function getAdditionalStyles(props: CTAProps) {
        if (props.styles && props.styles.internal.content) {
            return JSON.parse(props.styles.internal.content);
        }
        return {};
    }

    function getParentFlexProps(props: CTAProps) {
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
                                    key={elem?.id ?? ""}
                                    {...(elem as Queries.ContentfulComponentFeatureBlock)}
                                />
                            );
                        })}
                    </Stack>
                )}
                {props.content && (
                    <div
                        style={{
                            textAlign:
                                (props.alignContentText as CanvasTextAlign) ??
                                "inherit",
                        }}
                    >
                        <RichText {...props.content} />
                    </div>
                )}
            </Stack>
        </Flex>
    );
}

export const query = graphql`
    fragment CTAComponent on ContentfulComponentCta {
        id
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
        alignContentText
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
