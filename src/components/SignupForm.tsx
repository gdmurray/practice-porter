import { useForm } from "react-hook-form";
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Stack,
} from "@chakra-ui/react";

interface SignupFormInput {
    email: string;
    practiceName: string;
    name: string;
    averageMonthlyNewPatients: number;
    location: string;
}

export const SignupForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
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
            .then((res) => res.json());
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
                <Button
                    mt={4}
                    bg="brand.400"
                    color={"white"}
                    _hover={{ bg: "brand.100" }}
                    // isLoading={isSubmitting}
                    type="submit"
                >
                    Submit
                </Button>
            </Stack>
        </form>
    );
};
