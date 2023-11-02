import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box, Center, Heading, Highlight, Flex, theme } from "@chakra-ui/react";
import Header from "../components/Header";
import { SignupForm } from "../components/SignupForm";

const $lineHeight = "1.4375rem";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Box as="main">
            <Header />
            <Center display={"block"} textAlign="center" as="main" w={"100%"}>
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
        </Box>
    );
};

export default IndexPage;
export const Head: HeadFC = () => <title>Home Page</title>;
