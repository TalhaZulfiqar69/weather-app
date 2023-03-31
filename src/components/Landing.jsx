import React from "react";
import { Box, Flex, Container, Stack } from "@chakra-ui/react";
import HeadingContent from "./Heading";
import SearchBar from "./SearchBar";
import Weather from "./Weather";

export default function Landing() {
  return (
    <Box p={4}>
      <Container maxW={"7xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <HeadingContent />
          <SearchBar />
          <Flex w={"full"}>
            <Stack>
              <Weather />
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
