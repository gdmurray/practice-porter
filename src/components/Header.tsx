import React from "react";
import {
    Box,
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Text,
    useDisclosure,
    useTheme,
    VStack,
} from "@chakra-ui/react";
import { graphql, Link } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "./Logo";
import ActionItem from "@/components/ActionItem";
import { debugProps } from "@/modules/debug";

const MenuItem = ({
    children,
    isLast,
    to = "/",
    ...rest
}: {
    children: React.ReactNode;
    isLast: boolean;
    to: string | null;
} & { [key: string]: any }) => {
    const theme = useTheme();
    return (
        <Text
            mr={{ base: 0, sm: isLast ? 0 : 4 }}
            color={theme.colors.gray["700"]}
            _hover={{ color: "fg.default" }}
            fontWeight={theme.fontWeights.medium}
            fontSize={theme.fontSizes.lg}
            display="block"
            {...rest}
        >
            <Link to={to ?? ""}>{children}</Link>
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

type HeaderProps = Queries.HeaderComponentFragment;

const MotionModalBody = motion(ModalBody);
const Header = (props: HeaderProps) => {
    debugProps("Header", props);
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
    const theme = useTheme();

    return (
        <Flex
            as="header"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={{ sm: 4, md: 8 }}
            p={theme.space["4"]}
            bg={"bg.surface"}
            color={["white", "white", "primary.700", "primary.700"]}
            zIndex={1800}
            {...props}
        >
            <Flex align="center" zIndex={1800}>
                <Logo />
            </Flex>

            <Box
                cursor={"pointer"}
                display={{ base: "block", md: "none" }}
                onClick={onToggle}
                zIndex={1800}
            >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
            </Box>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                closeOnOverlayClick={true}
                closeOnEsc={true}
                styleConfig={{
                    modal: {
                        position: "fixed",
                        top: 0,
                        maxWidth: "100vw",
                        width: "100%",
                        zIndex: 1400,
                    },
                }}
                motionPreset={"slideInTop"}
            >
                <ModalContent
                    as={"div"}
                    containerProps={{ marginTop: 100 }}
                    zIndex={1500}
                    dropShadow={"xl"}
                >
                    <ModalOverlay onClick={onClose} />
                    <AnimatePresence>
                        {isOpen && (
                            <MotionModalBody
                                p={4}
                                bg={"bg.surface"}
                                shadow={"xl"}
                                dropShadow={"lg"}
                                zIndex={1500}
                                initial={{ y: -50, opacity: 1 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -5, opacity: 1 }}
                                transition={{ duration: 0.25 }}
                            >
                                <VStack gap={1} alignItems={"flex-start"}>
                                    {props.links &&
                                        props.links.map((elem) => (
                                            <Button
                                                py={4}
                                                as={Link}
                                                key={elem?.title ?? ""}
                                                to={elem?.link ?? "/"}
                                                variant={"ghost"}
                                                width={"100%"}
                                                justifyContent={"flex-start"}
                                                color={theme.colors.gray["700"]}
                                                fontWeight={
                                                    theme.fontWeights.medium
                                                }
                                                fontSize={theme.fontSizes.lg}
                                            >
                                                {elem?.title}
                                            </Button>
                                        ))}

                                    {props.cta && (
                                        <Box pl={4} w={"xs"} py={2}>
                                            <ActionItem
                                                {...props.cta}
                                                width={"150px"}
                                            />
                                        </Box>
                                    )}
                                </VStack>
                            </MotionModalBody>
                        )}
                    </AnimatePresence>
                </ModalContent>
            </Modal>
            <Box
                display={{ base: "none", md: "block" }}
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
                    gap={{ base: 0, md: 2, lg: 4 }}
                    direction={["column", "row", "row", "row"]}
                    pt={[4, 4, 0, 0]}
                >
                    {props.links &&
                        props.links.map((elem) => (
                            <MenuItem
                                isLast={false}
                                key={elem?.title ?? ""}
                                to={elem?.link ?? "/"}
                            >
                                {elem?.title}
                            </MenuItem>
                        ))}
                    <Box
                        height={"25px"}
                        borderLeft={"1px solid"}
                        borderLeftColor={"gray.600"}
                        mr={4}
                    />
                    {props.cta && <ActionItem {...props.cta} />}
                </Flex>
            </Box>
        </Flex>
    );
};

export default Header;

export const query = graphql`
    fragment HeaderComponent on ContentfulHeader {
        links {
            title
            icon
            iconPosition
            link
            opensInNewTab
        }
        cta {
            ...ActionItemComponent
        }
        logo {
            description
            title
            file {
                fileName
                url
            }
        }
    }
`;
