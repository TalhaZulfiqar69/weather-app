import { Heading, Text } from "@chakra-ui/react";
import React from "react";

const HeadingContent = () => {
  return (
    <>
      <Heading
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
      >
        <Text as={"span"} color={"orange.400"}>
          Weather Forecast&nbsp;
        </Text>
        <Text as={"span"}>Application</Text>
      </Heading>
      <Text color={"gray.500"} maxW={"3xl"}>
        Never miss a meeting. Never be late for one too. Keep track of your
        meetings and receive smart reminders in appropriate times. Read your
        smart “Daily Agenda” every morning.
      </Text>
    </>
  );
};

export default HeadingContent;
