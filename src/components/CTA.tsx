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
        >
            <Stack>
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
        content {
            raw
            references {
                ...ActionItemComponent
            }
            #            references {
            #                ...ActionItemComponent
            #                ...CustomComponent
            #                contentful_id
            #                internal {
            #                    type
            #                }
            #            }
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
