import { useForm } from "react-hook-form";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Stack,
    theme,
    useColorModeValue,
} from "@chakra-ui/react";

interface SignupFormInput {
    email: string;
    practiceName: string;
    name: string;
    averageMonthlyNewPatients: number;
    location: string;
}

const ThankYouLogo = () => {
    return (
        <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 123.49 83.08"
            fill={"#005d67"}
        >
            <defs>
                <style>.cls-2{"fill:#005d67 !important;"}</style>
            </defs>
            <path
                className="cls-2"
                d="M95.77,40.39a13.81,13.81,0,0,0-4.94-9.52,14.1,14.1,0,0,0-19.68,1.95l-2.89,3.39,1.16,1a4.52,4.52,0,0,0,6.38-.52h0a8,8,0,0,1,11.28-1.06,7.84,7.84,0,0,1,.9,10.9,8,8,0,0,1-11.31.8h0a4.52,4.52,0,0,0-6.38.52l-1,1.16,3.39,2.88a14.11,14.11,0,0,0,19.77-1.31A13.82,13.82,0,0,0,95.77,40.39Z"
            />
            <path
                className="cls-2"
                d="M62.46,43,53.23,53.92h0a6,6,0,0,0,8.52-.7L71,42.35h0A6,6,0,0,0,62.46,43Z"
            />
            <path
                className="cls-2"
                d="M27.78,42.7a13.85,13.85,0,0,0,4.94,9.52A14.11,14.11,0,0,0,52.4,50.27l2.88-3.4-1.15-1a4.53,4.53,0,0,0-6.39.53h0a8,8,0,0,1-11.27,1,7.84,7.84,0,0,1-.9-10.9,8,8,0,0,1,11.31-.79h0a4.52,4.52,0,0,0,6.38-.53l1-1.15-3.39-2.88a14.1,14.1,0,0,0-19.77,1.3A13.8,13.8,0,0,0,27.78,42.7Z"
            />
            <path
                className="cls-2"
                d="M61.09,40l9.23-10.87h0a6,6,0,0,0-8.52.69L52.56,40.74h0A6,6,0,0,0,61.09,40Z"
            />
        </svg>
    );
};

export const SignupForm = () => {
    const {
        handleSubmit,
        register,
        setError,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<SignupFormInput>();

    async function onSubmit(values) {
        return await window
            .fetch(`/api/join-mailing-list`, {
                method: `POST`,
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(values),
            })
            .then(async (res) => {
                const json = await res.json();
                if (json.status === "Error") {
                    setError("root.serverError", {
                        message: json.message,
                    });
                }
                return json;
            });
    }

    if (isSubmitSuccessful) {
        return (
            <Stack>
                <ThankYouLogo />
                <Heading as={"h3"} size={"md"} color={"gray.800"}>
                    Thanks for registering, we&apos;ll be in touch!
                </Heading>
            </Stack>
        );
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            method={"POST"}
            action={"/api/join-mailing-list"}
        >
            <Stack gap={"4"}>
                <FormControl isInvalid={!!errors.email}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                        id="email"
                        placeholder="Email Address"
                        type={"email"}
                        {...register<keyof SignupFormInput>("email", {
                            required: "This is required",
                            minLength: {
                                value: 4,
                                message: "Minimum length should be 4",
                            },
                        })}
                    />
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.practiceName}>
                    <FormLabel htmlFor="practiceName">Practice Name</FormLabel>
                    <Input
                        id="practiceName"
                        placeholder="Practice Name"
                        {...register<keyof SignupFormInput>("practiceName", {
                            required: "This is required",
                            minLength: {
                                value: 2,
                                message: "Minimum length should be 2",
                            },
                        })}
                    />
                    <FormErrorMessage>
                        {errors.practiceName && errors.practiceName.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.name}>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input
                        id="name"
                        placeholder="Name"
                        {...register<keyof SignupFormInput>("name", {
                            required: "This is required",
                            minLength: {
                                value: 4,
                                message: "Minimum length should be 4",
                            },
                        })}
                    />
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.averageMonthlyNewPatients}>
                    <FormLabel htmlFor="averageMonthlyNewPatients">
                        Average Monthly New Patients
                    </FormLabel>
                    <Input
                        id="averageMonthlyNewPatients"
                        placeholder="Patients"
                        type={"number"}
                        {...register<keyof SignupFormInput>(
                            "averageMonthlyNewPatients",
                        )}
                    />
                    <FormErrorMessage>
                        {errors.averageMonthlyNewPatients &&
                            errors.averageMonthlyNewPatients.message}
                    </FormErrorMessage>
                </FormControl>
                {errors && errors.root?.serverError && (
                    <Alert status="error">
                        <AlertIcon />
                        <AlertTitle>
                            {errors.root?.serverError.message}
                        </AlertTitle>
                    </Alert>
                )}
                <Button
                    mt={4}
                    bg="brand.400"
                    color={"white"}
                    _hover={{ bg: "brand.100" }}
                    disabled={isSubmitSuccessful}
                    isLoading={isSubmitting}
                    type="submit"
                >
                    Submit
                </Button>
            </Stack>
        </form>
    );
};
