import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
    return (
        <Box
            borderRadius={10}
            overflow="hidden"
            display="flex"
            flexDirection="column"
            height="100%"
            boxShadow="md"
            _hover={{
                transform: "scale(1.05)",
                transition: "transform .30s ease-in",
                boxShadow: "xl",
            }}
        >
            {children}
        </Box>
    );
};

export default GameCardContainer;
