import React from "react";

import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const NavLink = ({ children }) => {
  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        bgGradient="linear(to-r, #141e30, #243b55)"
        fontWeight="semibold"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"} color="white">
            <Box>Weather Application</Box>
          </HStack>

          <Flex alignItems={"center"}>
            <Button
              onClick={toggleColorMode}
              background="#243b55"
              color="white"
              _hover={{ background: "#243b55", color: "#ffffff" }}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
