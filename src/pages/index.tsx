import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
    Box,
    Center,
    Heading,
    Highlight,
    Flex,
    theme,
    Stack,
} from "@chakra-ui/react";
import Header from "../components/Header";
import * as sections from "../components/sections";
import { SignupForm } from "../components/SignupForm";
import { graphql } from "gatsby";

const $lineHeight = "1.4375rem";

const ExistingSignupPage = () => (
    <Center display={"block"} textAlign="center" as="main" w={"100%"} mb={24}>
        <Flex gap={$lineHeight} flexDir="column">
            <Heading as={"h2"} size={"2xl"} mb={{ base: 4, md: 8 }}>
                <Highlight
                    query="Soon"
                    styles={{
                        color: "brand.900",
                        _dark: { color: "brand.400" },
                    }}
                >
                    Coming Soon
                </Highlight>
            </Heading>
            <Box
                borderRadius={theme.radii.xl}
                // m={{ base: 4, md: 16, lg: 10 }}
                p={{ base: 4, md: 6, lg: 16 }}
                maxW={theme.sizes.lg}
                w={"80vw"}
                minW={theme.sizes.sm}
                mr={"auto"}
                ml={"auto"}
                shadow={theme.shadows.md}
                bg={"gray.50"}
                borderColor={"brand.400"}
            >
                <SignupForm />
            </Box>
        </Flex>
    </Center>
);
const IndexPage: React.FC<PageProps> = ({ data }) => {
    const { body } = data.contentfulLandingPage;
    console.log("Body: ", body);
    return (
        <Box as="main">
            <Header />
            <Stack gap={"12"}>
                {body.map((elem) => {
                    const {
                        id,
                        __typename: typeName,
                        ...componentProps
                    } = elem;
                    const Component = sections[typeName] || (
                        <div>NOT FOUND</div>
                    );
                    // if (typeName === "ContentfulComponentHero") {
                    return <Component key={id} {...componentProps} />;
                    // }
                    // return <></>;
                })}
            </Stack>
        </Box>
    );
};

export default IndexPage;
export const Head: HeadFC = () => <title>Practice Porter</title>;

export const query = graphql`
    query {
        contentfulLandingPage {
            id
            body {
                __typename
                ...HeroComponent
                ...DuplexComponent
                ...CTAComponent
            }
        }
    }
`;

//
// fields {
//     align {
//         en_US
//     }
//     boxed {
//         en_US
//     }
//     content {
//         en_US {
//             content {
//                 content {
//                     value
//                     nodeType
//                 }
//                 nodeType
//             }
//         }
//     }
// }
