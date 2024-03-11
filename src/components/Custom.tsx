import React from "react";
import { SignupForm } from "@/components/custom/SignupForm";
import { ContactForm } from "@/components/custom/ContactForm";
import { graphql } from "gatsby";

const customComponents = {
    SignupForm,
    ContactForm,
};

export const CustomComponent = ({ name }: { name: string }) => {
    console.log("Custom Component Name: ", name);
    const Component =
        customComponents[name] || (() => <div>Component not found</div>);
    return <Component />;
};

export default CustomComponent;

export const query = graphql`
    fragment CustomComponent on ContentfulCustomComponent {
        name
    }
`;
