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
            <Center height="50vh" textAlign="center">
                <Flex gap={$lineHeight} flexDir="column">
                    <Heading as={"h2"} size={"2xl"} maxW={"16ch"}>
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
                        m={{ sm: 4, md: 16, lg: 10 }}
                        p={{ sm: 5, md: 5, lg: 16 }}
                        w={theme.sizes.md}
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
