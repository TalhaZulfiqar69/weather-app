import Stats from "./Stats";
import WeeklyWeather from "./WeeklyWeather";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Weather = () => {
  return (
    <Container>
      <Stack
        align={"center"}
        spacing={{ base: 20, md: 12 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Box
            position={"relative"}
            height={"auto"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Heading fontSize="xl" mt={8}>
              CURRENT WEATHER
            </Heading>

            <Grid templateColumns="repeat(3, 1fr)" gap={20} p={8}>
              <GridItem w="100%" h="auto">
                <Stats />
              </GridItem>
              <GridItem w="100%" h="auto">
                <Stats />
              </GridItem>
              <GridItem w="100%" h="auto">
                <Stats />
              </GridItem>
            </Grid>
            <Heading fontSize="xl" mt={8}>
              AIR CONDITIONS
            </Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={20} p={8}>
              <GridItem w="100%" h="auto">
                <Stats />
              </GridItem>
              <GridItem w="100%" h="auto">
                <Stats />
              </GridItem>
              <GridItem w="100%" h="auto">
                <Stats />
              </GridItem>
            </Grid>
          </Box>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"auto"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
            p={8}
          >
            <Heading fontSize="xl" mb={4}>
              WEEKLY FORECAST
            </Heading>
            <WeeklyWeather />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Weather;
