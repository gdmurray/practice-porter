import { extendTheme } from "@chakra-ui/react";

// Define the color values
const brandColors = {
    lightGrey: "#E5E5E5",
    lightBlue: "#86D7E0",
    deepTurquoise: "#005D67",
    mainTurquoise: "#059AAB",
    warmWhite: "#FBF6F2",
    white: "#FFFFFF",
    black: "#181716",
    darkerMuted: "#747373",
    // Define your grey color or any additional colors needed
    grey: "#a0aec0", // Example grey color, replace with your preferred value
};

const brandScale = {
    50: "#76cfd9",
    100: "#87D7E0",
    200: "#56c0cc",
    300: "#35b0be",
    400: "#059AAB",
    500: "#048d9d",
    600: "#03818f",
    700: "#027582",
    800: "#006974",
    900: "#005D67",
};

// export const config = {
//     initialColorMode: "system",
//     useSystemColorMode: true,
// };

const theme = {
    colors: {
        primary: "#059AAB",
        brand: brandScale,
        bg: {
            canvas: brandColors.lightGrey,
            surface: brandColors.white,
            subtle: brandColors.warmWhite,
            muted: brandColors.lightBlue,
        },
        fg: {
            default: brandColors.black,
            emphasized: brandColors.deepTurquoise,
            muted: brandColors.darkerMuted,
            subtle: brandColors.grey,
            inverted: brandColors.white,
        },
        border: {
            default: brandColors.grey,
            emphasized: brandColors.lightGrey,
            active: brandColors.grey,
        },
        bgAccent: {
            default: brandColors.mainTurquoise,
            subtle: brandColors.lightBlue,
            muted: brandColors.warmWhite,
        },
        fgAccent: {
            subtle: brandColors.lightGrey,
            muted: brandColors.warmWhite,
            default: brandColors.white,
        },
    },
    fonts: {
        heading: `'GeneralSans-Variable', sans-serif`,
        body: `'GeneralSans-Variable', sans-serif`,
    },
    styles: {
        global: {
            body: {
                bg: "white",
                color: "#181716",
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
        Text: {
            variants: {
                secondary: {
                    color: "#747373",
                },
            },
        },
    },
};

export default extendTheme(theme);
