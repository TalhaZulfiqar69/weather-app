import React from "react";
import { Stack, Input, useColorModeValue } from "@chakra-ui/react";

const SearchBar = () => {
  return (
    <Stack spacing={4} direction={{ base: "column", md: "row" }} w={"full"}>
      <Input
        type={"text"}
        placeholder={"john@doe.net"}
        color={useColorModeValue("gray.800", "gray.200")}
        bg={useColorModeValue("gray.100", "gray.600")}
        rounded={"full"}
        border={0}
        _focus={{
          bg: useColorModeValue("gray.200", "gray.800"),
          border: "orange.500",
          outline: "none",
        }}
      />
    </Stack>
  );
};

export default SearchBar;
