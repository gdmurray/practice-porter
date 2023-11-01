import { extendTheme } from "@chakra-ui/react";

const theme = {
    colors: {
        primary: "#059AAB",
        brand: {
            100: "#87D7E0",
            400: "#059AAB",
            900: "#005D67",
        },
    },
    fonts: {
        body: `'GeneralSans-Variable', sans-serif`,
    },
    styles: {
        global: {
            body: {
                bg: "#FBF6F2",
            },
            subtle: {
                bg: "#E5E5E5",
            },
        },
    },
    components: {
        Input: {
            variants: {
                outline: {
                    field: {
                        _focusVisible: {
                            borderColor: "brand.400",
                        },
                    },
                },
            },
        },
        FormLabel: {
            baseStyle: {
                fontWeight: "500",
                fontSize: "sm",
                marginBottom: "1",
            },
        },
    },
};
console.log("extending theme?");
export default extendTheme(theme);
