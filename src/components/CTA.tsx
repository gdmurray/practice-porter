import React, { useRef } from "react";
import { graphql } from "gatsby";
import {
    Flex,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
} from "@chakra-ui/react";
import { ContentfulComponentFeatureBlock } from "@/components/sections";
import { RichText } from "@/components/RichText";
import { debugProps } from "@/modules/debug";
import { FeatureBlockLayout } from "@/components/FeatureBlock";
import { motion, useInView } from "framer-motion";
import { TypingAnimation } from "@/components/TypingAnimation";

// direction = Column.. Stacked
// Direction = Row... columns? lol

type CTAProps = Queries.CTAComponentFragment;

enum FeaturesOrientation {
    VERTICAL = "Vertical",
    HORIZONTAL = "Horizontal",
}

enum FeaturesAnimation {
    SLIDE_IN = "Slide In",
    SLIDE_UP = "Slide Up",
}

const MotionStack = motion(Stack);

export default function CTA(props: CTAProps) {
    debugProps("CTA", props);
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, {
        once: true,
        margin: "0px 0px -250px 0px",
    });

    const overrideFeatureOrientation: FeatureBlockLayout | null | undefined =
        useBreakpointValue({
            base: FeatureBlockLayout.HORIZONTAL,
            md: null,
        });

    function getFeatureAnimationProps() {
        const slideUpProps = {
            initial: "hidden",
            animate: inView ? "visible" : "hidden",
            variants: {
                hidden: { opacity: 0, y: 75 }, // Start below their final position
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.2 },
                },
            },
        };

        const slideInProps = {
            initial: "hidden",
            animate: inView ? "visible" : "hidden",
            variants: {
                hidden: { opacity: 0, x: -100 },
                visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, delay: 0.2 },
                },
            },
        };
        if (props.featuresAnimation === FeaturesAnimation.SLIDE_UP) {
            return slideUpProps;
        }
        if (props.featuresAnimation === FeaturesAnimation.SLIDE_IN) {
            return slideInProps;
        }
        return {};
    }

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
        <Flex
            ref={ref}
            alignSelf={"center"}
            className={"cta"}
            {...getParentFlexProps(props)}
        >
            <Stack
                p={8}
                maxW={"8xl"}
                w={"full"}
                {...getStackProps(props)}
                {...getAdditionalStyles(props)}
                alignSelf={"center"}
                gap={8}
                {...(props.anchor != null ? { id: props.anchor } : {})}
            >
                <Stack gap={8}>
                    <Heading as={"h2"}>
                        {props.titleAnimation === "Type" ? (
                            <TypingAnimation
                                title={props.title ?? ""}
                                typingSpeed={50}
                            />
                        ) : (
                            <>{props.title}</>
                        )}
                    </Heading>
                    {props.description && props.description.description && (
                        <Text fontSize={"xl"} variant={"secondary"}>
                            {props.description.description}
                        </Text>
                    )}
                </Stack>
                {props.features && (
                    <MotionStack
                        direction={{
                            base: "column",
                            md:
                                props.featuresOrientation ===
                                FeaturesOrientation.HORIZONTAL
                                    ? "row"
                                    : "column",
                        }}
                        gap={"4"}
                        mt={4}
                        sx={{
                            "& > div": {
                                flexGrow: 1,
                                flexBasis: 0,
                            },
                        }}
                        {...getFeatureAnimationProps()}
                    >
                        {props.features.map((elem) => {
                            return (
                                <ContentfulComponentFeatureBlock
                                    key={elem?.id ?? ""}
                                    overrideFeatureOrientation={
                                        overrideFeatureOrientation
                                    }
                                    {...(elem as Queries.ContentfulComponentFeatureBlock)}
                                />
                            );
                        })}
                    </MotionStack>
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
        featuresAnimation
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
        titleAnimation
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
