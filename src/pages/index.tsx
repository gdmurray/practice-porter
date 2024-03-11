import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box, Center, Heading, Highlight, Flex, theme } from "@chakra-ui/react";
import { SignupForm } from "../components/custom/SignupForm";
import { graphql } from "gatsby";
import { Page } from "@/components/Page";
import { SEOHead } from "@/components/SeoMetadata";

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
    return <Page data={data} />;
};

export default IndexPage;
export const Head: HeadFC = ({ data }) => {
    return <SEOHead data={data} />;
};

export const query = graphql`
    query {
        contentfulPage(slug: { eq: "landing-page" }) {
            id
            header {
                ...HeaderComponent
            }
            body {
                __typename
                ...HeroComponent
                ...DuplexComponent
                ...CTAComponent
            }
            footer {
                ...FooterComponent
            }
            seo {
                ...SeoComponent
            }
        }
    }
`;
