import React from "react";
import { graphql, navigate } from "gatsby";
import { Button } from "@chakra-ui/react";
import { LazyIcon } from "@/components/LazyIcon";

enum IconPosition {
    LEFT = "Left",
    RIGHT = "Right",
}

enum ButtonAlign {
    LEFT = "Left",
    CENTER = "Center",
    RIGHT = "Right",
}

const alignSelfMap = {
    [ButtonAlign.LEFT]: "flex-start",
    [ButtonAlign.CENTER]: "center",
    [ButtonAlign.RIGHT]: "flex-end",
};

export default function ActionItem(props) {
    const icon =
        props.icon != null
            ? props.iconPosition === IconPosition.LEFT
                ? {
                      leftIcon: <LazyIcon iconName={props.icon} />,
                  }
                : { rightIcon: <LazyIcon iconName={props.icon} /> }
            : {};

    const scrollToDiv = (divId) => {
        const divElement = document.getElementById(divId.replace("#", ""));
        divElement.scrollIntoView({ behavior: "smooth" });
    };

    console.log("ACtion Props: ", props);

    return (
        <Button
            variant={props.itemType.toLowerCase()}
            bg="brand.400"
            color={"white"}
            _hover={{ bg: "brand.200" }}
            onClick={
                props.link != null
                    ? props.link.startsWith("#")
                        ? () => {
                              scrollToDiv(props.link);
                          }
                        : () => {
                              navigate(props.link);
                          }
                    : undefined
            }
            {...(props.width != null ? { maxW: props.width, w: "100%" } : {})}
            {...(props.width != null && props.align != null
                ? { alignSelf: alignSelfMap[props.align] }
                : {})}
            {...icon}
        >
            {props.text}
        </Button>
    );
}

export const query = graphql`
    fragment ActionItemComponent on ContentfulComponentActionItem {
        id
        text
        link
        icon
        itemType
        align
        width
        iconPosition
    }
`;
