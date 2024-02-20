import { graphql } from "gatsby";
import {
    Button,
    Flex,
    Heading,
    Stack,
    useBreakpointValue,
    Text,
    Image,
} from "@chakra-ui/react";
import { RichText } from "@/components/RichText";
import { Asset } from "@/components/Asset";

enum DuplexAlign {
    LEFT = "Left",
    RIGHT = "Right",
}

export default function Duplex(props) {
    console.log("Duplex Props: ", props);
    return (
        <Stack
            // minH={"100vh"}
            direction={{
                base: "column",
                md: props.align === DuplexAlign.RIGHT ? "row" : "row-reverse",
            }}
            {...(props.anchor != null ? { id: props.anchor } : {})}
        >
            <Flex p={8} flex={1} align={"center"} justify={"center"}>
                <Stack spacing={8} w={"full"} maxW={"lg"}>
                    <Heading as={"h3"}>{props.title}</Heading>
                    <RichText {...props.description} />
                    {/* <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}> */}
                    {/*    <Text */}
                    {/*        as={"span"} */}
                    {/*        position={"relative"} */}
                    {/*        _after={{ */}
                    {/*            content: "''", */}
                    {/*            width: "full", */}
                    {/*            height: useBreakpointValue({ */}
                    {/*                base: "20%", */}
                    {/*                md: "30%", */}
                    {/*            }), */}
                    {/*            position: "absolute", */}
                    {/*            bottom: 1, */}
                    {/*            left: 0, */}
                    {/*            bg: "blue.400", */}
                    {/*            zIndex: -1, */}
                    {/*        }} */}
                    {/*    > */}
                    {/*        Freelance */}
                    {/*    </Text> */}
                    {/*    <br />{" "} */}
                    {/*    <Text color={"blue.400"} as={"span"}> */}
                    {/*        Design Projects */}
                    {/*    </Text>{" "} */}
                    {/* </Heading> */}
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
                <Asset
                    props={props.image}
                    contentProps={{ objectFit: "contain" }}
                />
            </Flex>
        </Stack>
    );
    // return <div>Duplex Moment</div>;
}

export const query = graphql`
    fragment DuplexComponent on ContentfulComponentDuplex {
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
