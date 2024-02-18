import React from "react";
import { Box } from "@chakra-ui/react";
import {
    FooterComponentFragment,
    HeaderComponentFragment,
} from "@/graphql/generated";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const Layout = ({
    children,
    header,
    footer,
}: React.PropsWithChildren & {
    header: HeaderComponentFragment;
    footer: FooterComponentFragment;
}) => {
    return (
        <>
            <Header {...header} />
            <Box as="main">{children}</Box>
            <Footer {...footer} />
        </>
    );
};
