import { graphql } from "gatsby";
import React from "react";
import {
    Box,
    ButtonGroup,
    Container,
    Divider,
    Grid,
    IconButton,
    Image,
    Stack,
    Text,
    useTheme,
} from "@chakra-ui/react";

import { LazyIcon } from "@/components/LazyIcon";

// Utility function to convert hex to RGB
function hexToRgb(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return { r, g, b };
}

export default function Footer(props) {
    const theme = useTheme();
    const brand500 = theme.colors.brand[500];
    const rgb = hexToRgb(brand500); // Convert hex to RGB
    const hoverBgColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)`; // 20% opacity
    console.log("Footer Props: ", props);
    const linksBySection = props.links.reduce((acc, elem) => {
        if (elem.section in acc) {
            acc[elem.section].push(elem);
        } else {
            acc[elem.section] = [elem];
        }
        return acc;
    }, {});
    console.log(props.socialMediaLinks);
    return (
        <Box bg={"brand.900"}>
            <Container as={"footer"} w={"100%"} maxW={"7xl"}>
                <Stack
                    direction={{ base: "column", md: "row" }}
                    paddingTop={{ base: 12, sm: 16 }}
                    paddingBottom={{ base: 8, sm: 12 }}
                >
                    <Stack>
                        <Image src={props.logo.file.url} />
                        <Text color="fgAccent.muted">{props.description}</Text>
                    </Stack>
                    <Grid
                        gap={8}
                        templateColumns={`repeat(4, minmax(0px, 1fr));`}
                    >
                        {props.sectionOrder.map((section) => (
                            <Stack key={section} gap={4} pt={4}>
                                <Text
                                    fontSize={"sm"}
                                    fontWeight={"600"}
                                    color={"fgAccent.subtle"}
                                >
                                    {section}
                                </Text>

                                {section in linksBySection && (
                                    <Stack gap={2}>
                                        {linksBySection[section].map((elem) => (
                                            <Box
                                                fontSize={"sm"}
                                                fontWeight={"600"}
                                                color={"fgAccent.default"}
                                                key={elem.title}
                                                as="a"
                                                href={elem.link}
                                            >
                                                {elem.title}
                                            </Box>
                                        ))}
                                    </Stack>
                                )}
                            </Stack>
                        ))}
                    </Grid>
                </Stack>
                <Divider />
                <Stack
                    direction={"row"}
                    paddingTop={8}
                    paddingBottom={12}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Text color={"fgAccent.subtle"}>
                        {new Date().getFullYear()} {props.disclaimer}
                    </Text>
                    {props.socialMediaLinks &&
                        props.socialMediaLinks.length > 0 && (
                            <ButtonGroup>
                                {props.socialMediaLinks.map((elem) => (
                                    <IconButton
                                        variant={"outline"}
                                        border={0}
                                        _hover={{
                                            backgroundColor: hoverBgColor,
                                        }}
                                        as={"a"}
                                        href={elem.link}
                                        {...(elem.opensInNewTab
                                            ? { target: "_blank" }
                                            : {})}
                                        cursor={"pointer"}
                                        key={elem.title}
                                        aria-label={elem.title}
                                        color={"fgAccent.default"}
                                        icon={<LazyIcon iconName={elem.icon} />}
                                    />
                                ))}
                            </ButtonGroup>
                        )}
                </Stack>
            </Container>
        </Box>
    );
}

export const query = graphql`
    fragment FooterComponent on ContentfulFooter {
        links {
            title
            icon
            iconPosition
            link
            opensInNewTab
            section
        }
        logo {
            ...AssetComponent
        }
        description
        disclaimer
        sectionOrder
        socialMediaLinks {
            icon
            link
            opensInNewTab
        }
    }
`;
