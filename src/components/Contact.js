import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";

export default function Contact() {
  const { colorMode } = useColorMode();
  const textColor = colorMode === "dark" ? "white" : "gray.800";

  return (
    <Box
      bg={colorMode === "dark" ? "red.900" : "cyan.200"}
      color={textColor}
      px={8}
      py={20}
      h={["auto", "auto", "auto", "100vh"]}
    >
      <Box mx="auto" maxW="xl" textAlign="center">
        <Heading as="h2" fontSize="4xl" mb={4}>
          Contact
        </Heading>
        <Text fontSize="xl" mb={8}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          gravida justo ac tincidunt consectetur. Praesent ultrices ullamcorper
          dolor, at imperdiet odio fermentum sit amet. Sed viverra commodo eros
          id semper.
        </Text>
        <Text fontSize="xl">
          Fusce ac mauris ipsum. Integer rutrum, lorem et commodo lobortis,
          enim libero pellentesque orci, non pharetra nulla justo a nulla.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Vestibulum sed purus nisl. Sed euismod lacus ac
          dolor commodo, sit amet imperdiet nisl ultrices.
        </Text>
      </Box>
    </Box>
  );
}
