import { Box, Flex, Center } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
    return (
        <>
            <NavBar />
            <Box
                as="main"
                display="flex"
                flexDirection="column"
                height="100vh"
                justifyContent="flex-start"
            >
                {/* Main Content Area */}
                <Flex
                    flex="1"
                    direction="column"
                    justify="center"
                    align="center"
                    padding={4}
                    overflow="hidden"
                >
                    <Outlet />
                </Flex>
            </Box>
        </>
    );
};

export default Layout;
