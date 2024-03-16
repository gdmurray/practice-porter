import * as React from "react";
import { Box, Button, Text, VStack, Link } from "@chakra-ui/react";
import { HeadFC, Link as GatsbyLink } from "gatsby";

const NotFoundPage = () => {
    return (
        <Box textAlign="center" py="20" px="6">
            <Text
                display="inline-block"
                align="center"
                fontSize="180px"
                fontWeight="bold"
                color="primary.500"
                textTransform="uppercase"
                lineHeight="0.8"
            >
                404
            </Text>
            <Text fontSize="18px" mt="3" mb="2">
                Page not found
            </Text>
            <Text color="gray.500" mb="6">
                The page you’re looking for does not seem to exist
            </Text>

            <Button
                colorScheme="teal"
                bg="teal.400"
                color="white"
                variant="solid"
                as={GatsbyLink}
                to="/"
            >
                Go to Home
            </Button>
        </Box>
    );
};

export default NotFoundPage;

export const Head: HeadFC = () => (
    <title>Practice Porter - Page Not found</title>
);
