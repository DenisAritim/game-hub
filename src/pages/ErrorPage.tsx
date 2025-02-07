import { Heading, Text, Flex } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <NavBar />
            <Flex direction="column" align="center" justify="center" mt={20} px={4}>
                <Heading mb={4}>Oops!</Heading>
                <Text fontSize="lg" color="gray.600">
                    {isRouteErrorResponse(error)
                        ? "This page does not exist."
                        : "An unexpected error occurred."}
                </Text>
            </Flex>
        </>
    );
};

export default ErrorPage;
