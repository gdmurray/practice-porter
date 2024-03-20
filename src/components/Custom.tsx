import React from "react";
import { SignupForm } from "@/components/custom/SignupForm";
import { ContactForm } from "@/components/custom/ContactForm";
import { graphql } from "gatsby";
import { LandingPageHero } from "@/components/custom/LandingPageHero";

const customComponents = {
    SignupForm,
    ContactForm,
    LandingPageHero,
};

export const CustomComponent = ({
    name,
    props = {},
}: {
    name: string;
    props: any;
}) => {
    const Component =
        customComponents[name as keyof typeof customComponents] ||
        (() => <div>Component not found</div>);
    return <Component {...props} />;
};

export default CustomComponent;

export const query = graphql`
    fragment CustomComponent on ContentfulCustomComponent {
        id
        name
    }
`;
