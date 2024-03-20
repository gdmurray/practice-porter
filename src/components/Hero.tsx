import { graphql } from "gatsby";
import React from "react";
import {
    Box,
    Flex,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
    VStack,
} from "@chakra-ui/react";
import { RichText } from "@/components/RichText";
import { Asset } from "@/components/Asset";
import { debugProps } from "@/modules/debug";
import CustomComponent from "./Custom";

export enum HeroImageLocation {
    LEFT = "Left",
    RIGHT = "Right",
    BOTTOM = "Bottom",
    BACKGROUND = "Background",
    TOP = "Top",
}

type HeroProps = Queries.HeroComponentFragment;
export function getFlexDirection(imageLocation: HeroImageLocation) {
    if (imageLocation === HeroImageLocation.TOP) {
        return "column-reverse";
    }
    if (imageLocation === HeroImageLocation.BOTTOM) {
        return "column";
    }
    if (imageLocation === HeroImageLocation.LEFT) {
        return "row-reverse";
    }
    if (imageLocation === HeroImageLocation.RIGHT) {
        return "row";
    }
}

export default function Hero(props: HeroProps) {
    debugProps("Hero", props);
    const imageLocation = props.imageLocation;

    const paddingX = useBreakpointValue({ base: 4, md: 8 });
    const fontSize = useBreakpointValue({ base: "3xl", md: "4xl" });

    if (props.customComponent != null && props.customComponent.name != null) {
        return (
            <CustomComponent name={props.customComponent.name} props={props} />
        );
    }

    if (imageLocation === HeroImageLocation.BACKGROUND) {
        const isBackgroundVideo =
            props.image?.file?.contentType?.startsWith("video");
        return (
            <Flex
                className={"hero"}
                w={"full"}
                h={"100vh"}
                position="relative"
                {...(props.anchor != null ? { id: props.anchor } : {})}
            >
                {isBackgroundVideo ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    >
                        <source
                            src={props.image?.file?.url ?? ""}
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <Flex
                        w={"full"}
                        h={"100vh"}
                        backgroundImage={`url(${props?.image?.file?.url})`}
                        backgroundSize={"cover"}
                        backgroundPosition={"center center"}
                    />
                )}
                <VStack
                    w={"full"}
                    h={"100vh"}
                    position="absolute"
                    top="0"
                    left="0"
                    justify={"center"}
                    px={paddingX}
                    bgGradient={"linear(to-r, blackAlpha.800, blackAlpha.300)"}
                >
                    <Stack
                        maxW={"2xl"}
                        align={"center"}
                        spacing={6}
                        {...(isBackgroundVideo ? { color: "white" } : {})}
                    >
                        <Text
                            color={"white"}
                            align={"center"}
                            fontWeight={700}
                            lineHeight={1.2}
                            fontSize={fontSize}
                        >
                            {props.title}
                        </Text>
                        <RichText {...(props.content as unknown as any)} />
                    </Stack>
                </VStack>
            </Flex>
        );
    }

    return (
        <Stack
            className={"hero"}
            minH={"100vh"}
            direction={{
                base: "column",
                md: getFlexDirection(imageLocation as HeroImageLocation),
            }}
            maxW={"8xl"}
            {...(props.anchor != null ? { id: props.anchor } : {})}
        >
            <Flex p={8} flex={1} align={"center"} justify={"center"}>
                <Stack spacing={8} w={"full"} maxW={"xl"}>
                    <Heading
                        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                        textAlign={
                            imageLocation === HeroImageLocation.TOP
                                ? "center"
                                : "initial"
                        }
                    >
                        {props.title}
                    </Heading>
                    <RichText {...(props.content as unknown as any)} />
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Asset
                    props={props.image as Queries.AssetComponentFragment}
                    contentProps={{ objectFit: "cover" }}
                />
            </Flex>
        </Stack>
    );
}

export const query = graphql`
    fragment HeroComponent on ContentfulComponentHero {
        id
        title
        content {
            raw
            references {
                ...ActionItemComponent
                contentful_id
                internal {
                    type
                }
            }
        }
        image {
            ...AssetComponent
        }
        imageLocation
        anchor
        customComponent {
            ...CustomComponent
        }
    }
`;
