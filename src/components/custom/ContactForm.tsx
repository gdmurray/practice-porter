import React from "react";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    Textarea,
    useTheme,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface FormInput {
    name: string;
    email: string;
    content: string;
}

export const ContactForm = () => {
    const theme = useTheme();

    const {
        handleSubmit,
        register,
        formState: { isSubmitSuccessful },
    } = useForm<FormInput>();

    function onSubmit(values: FormInput) {
        const userEmail = "info@practiceporter.ca";
        const subject = `Practice Porter Inquiry from ${values.name}`;
        const body = values.content;

        const mailToLink = `mailto:${userEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(mailToLink, "_blank");
    }

    return (
        <Flex
            bg={"bg.muted"}
            alignSelf={"center"}
            w={"99vw"}
            justifyContent={"center"}
            id={"contact"}
            py={16}
        >
            <Stack
                p={8}
                maxW={"6xl"}
                w={"full"}
                alignSelf={"center"}
                gap={8}
                direction={{ base: "column", md: "row" }}
            >
                {isSubmitSuccessful ? (
                    <Stack justifyContent={"center"} textAlign={"center"}>
                        <Heading>Thanks for your Request!</Heading>
                        <Text>We will get back to you as soon as we can!</Text>
                    </Stack>
                ) : (
                    <>
                        <Stack justifyContent={"center"}>
                            <Heading as={"h2"}>Contact Us</Heading>
                            <Text>
                                Need to get in touch with us? Fill out this form
                                with your inquiry and we will get back to you as
                                soon as we can.
                            </Text>
                        </Stack>
                        <Box
                            bg={"bg.surface"}
                            borderRadius={"lg"}
                            p={{ base: 4, md: 6, lg: 16 }}
                            maxW={theme.sizes.lg}
                            minW={theme.sizes.sm}
                            mr={"auto"}
                            ml={"auto"}
                            shadow={theme.shadows.md}
                            borderColor={"border.default"}
                        >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Stack gap={6}>
                                    <FormControl>
                                        <FormLabel htmlFor={"name"}>
                                            Name
                                        </FormLabel>
                                        <Input
                                            id={"name"}
                                            placeholder={"Name"}
                                            {...register("name")}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel htmlFor={"email"}>
                                            Email
                                        </FormLabel>
                                        <Input
                                            id="email"
                                            placeholder="Email Address"
                                            type={"email"}
                                            {...register("email", {
                                                required: "This is required",
                                                minLength: {
                                                    value: 4,
                                                    message:
                                                        "Minimum length should be 4",
                                                },
                                            })}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel htmlFor={"content"}>
                                            What can we help you with?
                                        </FormLabel>
                                        <Textarea
                                            id={"content"}
                                            placeholder={"Your message"}
                                            {...register("content")}
                                            rows={3}
                                        />
                                    </FormControl>
                                    <Button
                                        type={"submit"}
                                        color={"white"}
                                        bg={"brand.400"}
                                        _hover={{ bg: "brand.300" }}
                                    >
                                        Submit
                                    </Button>
                                </Stack>
                            </form>
                        </Box>
                    </>
                )}
            </Stack>
        </Flex>
    );
};
