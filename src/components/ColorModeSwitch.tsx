import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <HStack>
            <Switch
                colorScheme="green"
                isChecked={colorMode === "dark"}
                onChange={toggleColorMode}
            />
            <Text whiteSpace="nowrap">
                {colorMode === "dark" ? <FaSun /> : <FaMoon />}
            </Text>
        </HStack>
    );
};

export default ColorModeSwitch;
