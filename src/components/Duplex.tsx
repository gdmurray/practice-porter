import { graphql } from "gatsby";
import React, { useRef } from "react";
import { Flex, Heading, Stack } from "@chakra-ui/react";
import { RichText } from "@/components/RichText";
import { Asset } from "@/components/Asset";
import { debugProps } from "@/modules/debug";
import { motion, useInView } from "framer-motion";

enum DuplexAlign {
    LEFT = "Left",
    RIGHT = "Right",
}

enum DuplexAnimation {
    SLIDE_IN = "Slide In",
}

const MotionFlex = motion(Flex);
export default function Duplex(props: Queries.DuplexComponentFragment) {
    debugProps("Duplex", props);
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, {
        once: true,
        margin: "0px 0px -250px 0px",
    });

    const textAnimationDirection =
        props.align === DuplexAlign.RIGHT ? -100 : 100;
    const imageAnimationDirection =
        props.align === DuplexAlign.RIGHT ? 100 : -100;

    const textAnimationProps =
        props.animate === DuplexAnimation.SLIDE_IN
            ? {
                  initial: "hidden",
                  animate: inView ? "visible" : "hidden",
                  variants: {
                      hidden: { opacity: 0, x: textAnimationDirection },
                      visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.5 },
                      },
                  },
              }
            : {};

    const imageAnimationProps =
        props.animate === DuplexAnimation.SLIDE_IN
            ? {
                  initial: "hidden",
                  animate: inView ? "visible" : "hidden",
                  variants: {
                      hidden: { opacity: 0, x: imageAnimationDirection },
                      visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.5 },
                      },
                  },
              }
            : {};

    return (
        <Stack
            className={"duplex"}
            direction={{
                base: "column",
                md: props.align === DuplexAlign.RIGHT ? "row" : "row-reverse",
            }}
            ref={ref}
            maxW={"8xl"}
            {...(props.anchor != null ? { id: props.anchor } : {})}
        >
            <MotionFlex
                p={8}
                flex={1}
                align={"center"}
                justify={"center"}
                {...textAnimationProps}
            >
                <Stack spacing={8} w={"full"} maxW={"lg"}>
                    <Heading as={"h3"}>{props.title}</Heading>
                    <RichText {...(props.description as unknown as any)} />
                </Stack>
            </MotionFlex>
            <MotionFlex flex={1} {...imageAnimationProps}>
                <Asset
                    props={props.image as Queries.AssetComponentFragment}
                    contentProps={{ objectFit: "contain" }}
                />
            </MotionFlex>
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
        animate
    }
`;
