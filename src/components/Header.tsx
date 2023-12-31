import React from "react";
import { Box, Flex, Text, useTheme } from "@chakra-ui/react";
import { Link } from "gatsby";
import Logo from "./Logo";

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    const theme = useTheme();
    return (
        <Text
            mr={{ base: 0, sm: isLast ? 0 : 8 }}
            color={theme.colors.black}
            fontWeight={theme.fontWeights.medium}
            fontSize={theme.fontSizes.lg}
            display="block"
            {...rest}
        >
            <Link to={to}>{children}</Link>
        </Text>
    );
};

const CloseIcon = () => {
    const theme = useTheme();
    return (
        <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <title>Close</title>
            <path
                fill={theme.colors.brand["900"]}
                d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
            />
        </svg>
    );
};

const MenuIcon = () => {
    const theme = useTheme();
    return (
        <svg
            width="24px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill={theme.colors.brand["900"]}
        >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
    );
};

const Header = (props) => {
    const [show, setShow] = React.useState(false);
    const toggleMenu = () => setShow(!show);
    const theme = useTheme();
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={{ sm: 4, md: 8 }}
            // p={{ sm: 4, md: 8 }}
            p={theme.space["4"]}
            bg={["primary.500", "primary.500", "transparent", "transparent"]}
            color={["white", "white", "primary.700", "primary.700"]}
            {...props}
        >
            <Flex align="center">
                <Logo
                // color={["white", "white", "primary.500", "primary.500"]}
                />
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
                {show ? <CloseIcon /> : <MenuIcon />}
            </Box>

            <Box
                display={{ base: show ? "block" : "none", md: "block" }}
                flexBasis={{ base: "100%", md: "auto" }}
            >
                <Flex
                    align="center"
                    justify={[
                        "center",
                        "space-between",
                        "flex-end",
                        "flex-end",
                    ]}
                    direction={["column", "row", "row", "row"]}
                    pt={[4, 4, 0, 0]}
                >
                    <MenuItem to="/">Coming Soon</MenuItem>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Header;
