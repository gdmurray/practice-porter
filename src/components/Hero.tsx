import { graphql } from "gatsby";
import {
    Container,
    Flex,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
    Button,
    Image,
    VStack,
} from "@chakra-ui/react";
import { RichText } from "@/components/RichText";

enum HeroImageLocation {
    LEFT = "Left",
    RIGHT = "Right",
    BOTTOM = "Bottom",
    BACKGROUND = "Background",
}

export default function Hero(props) {
    // console.log("HERO PROPS: ", props);
    const imageLocation = props.imageLocation;
    if (imageLocation === HeroImageLocation.BACKGROUND) {
        return (
            <Flex
                w={"full"}
                h={"100vh"}
                backgroundImage={`url(${props.image.file.url})`}
                backgroundSize={"cover"}
                backgroundPosition={"center center"}
            >
                <VStack
                    w={"full"}
                    justify={"center"}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
                >
                    <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
                        <Text
                            color={"white"}
                            fontWeight={700}
                            lineHeight={1.2}
                            fontSize={useBreakpointValue({
                                base: "3xl",
                                md: "4xl",
                            })}
                        >
                            {props.title}
                        </Text>
                        <RichText {...props.content} />
                        {/* <Stack direction={"row"}> */}
                        {/*    <Button */}
                        {/*        bg={"blue.400"} */}
                        {/*        rounded={"full"} */}
                        {/*        color={"white"} */}
                        {/*        _hover={{ bg: "blue.500" }} */}
                        {/*    > */}
                        {/*        Show me more */}
                        {/*    </Button> */}
                        {/*    <Button */}
                        {/*        bg={"whiteAlpha.300"} */}
                        {/*        rounded={"full"} */}
                        {/*        color={"white"} */}
                        {/*        _hover={{ bg: "whiteAlpha.500" }} */}
                        {/*    > */}
                        {/*        Show me more */}
                        {/*    </Button> */}
                        {/* </Stack> */}
                    </Stack>
                </VStack>
            </Flex>
        );
    }
    return (
        <Stack
            minH={"100vh"}
            direction={{
                base: "column",
                md:
                    imageLocation === HeroImageLocation.RIGHT
                        ? "row"
                        : "row-reverse",
            }}
        >
            <Flex p={8} flex={1} align={"center"} justify={"center"}>
                <Stack spacing={6} w={"full"} maxW={"lg"}>
                    <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                        {props.title}
                    </Heading>
                    <RichText {...props.content} />
                    {/* <Text */}
                    {/*    fontSize={{ base: "md", lg: "lg" }} */}
                    {/*    color={"gray.500"} */}
                    {/* > */}
                    {/*    The project board is an exclusive resource for contract */}
                    {/*    work. It&apos;s perfect for freelancers, agencies, and */}
                    {/*    moonlighters. */}
                    {/* </Text> */}
                    {/* <Stack */}
                    {/*    direction={{ base: "column", md: "row" }} */}
                    {/*    spacing={4} */}
                    {/* > */}
                    {/*    <Button */}
                    {/*        rounded={"full"} */}
                    {/*        bg={"blue.400"} */}
                    {/*        color={"white"} */}
                    {/*        _hover={{ */}
                    {/*            bg: "blue.500", */}
                    {/*        }} */}
                    {/*    > */}
                    {/*        Create Project */}
                    {/*    </Button> */}
                    {/*    <Button rounded={"full"}>How It Works</Button> */}
                    {/* </Stack> */}
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={props.image.title}
                    objectFit={"cover"}
                    src={props.image.file.url}
                />
            </Flex>
        </Stack>
    );
}

export const query = graphql`
    fragment HeroComponent on ContentfulComponentHero {
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
            title
            description
            file {
                fileName
                url
            }
        }
        imageLocation
        #        background
        #        image {
        #            fields {
        #                description {
        #                    en_US
        #                }
        #                file {
        #                    en_US {
        #                        contentType
        #                        fileName
        #                        url
        #                    }
        #                }
        #            }
        #        }
    }
`;
