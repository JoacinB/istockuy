import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  const { colorMode } = useColorMode();
  const shadowColor = {
    light: "shadow-[5px_8px_30px_-15px_rgba(0,0,0,1)]",
    dark: "shadow-[5px_8px_30px_-15px_rgba(255,255,255,0.3)]",
  };
  const [text] = useTypewriter({
    words: ["Full-Stack Developer", "Web Developer", "Mobile Developer"],
    loop: 0,
    deleteSpeed: 80,
  });
  const textColor = colorMode === "dark" ? "white" : "gray.800";
  return (
    <Box
      backgroundImage="url('iphone14_hero.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      color={textColor}
      px={8}
      py={20}
      h={["auto", "auto", "auto", "100vh"]}
    >
      <Box mx="auto" className=" text-center">
        <Heading as="h2" fontSize="5xl" mb={4} className=" text-slate-100">
          iPhone 14 Pro
        </Heading>
      </Box>
    </Box>
  );
}
