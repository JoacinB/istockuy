import { Box, Heading, Divider, Flex } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  const { colorMode } = useColorMode();
  const shadowColor = {
    light: "shadow-[5px_8px_30px_-15px_rgba(0,0,0,1)]",
    dark: "shadow-[5px_8px_30px_-15px_rgba(255,255,255,0.3)]",
  };
  const [text] = useTypewriter({
    words: ["AirPods Pro (segunda generación)"],
    loop: 0,
    deleteSpeed: 80,
  });
  const textColor = colorMode === "dark" ? "white" : "gray.800";
  return (
    <Box
      color={textColor}
      px={8}
      className="invisible py-10 md:py-20 md:visible "
    >
      <Heading as="h2" fontSize="6xl" bgGradient="linear(to-r, #6927d9, #d446ab)" bgClip="text" pb={4} className="hidden lg:block">
          {text}
          <Cursor></Cursor>
      </Heading>
      <Box       
      h={["auto", "auto", "auto", "100vh"]}
      backgroundImage="url('airpodspro2.png')"
      backgroundPosition="bottom"
      backgroundRepeat="no-repeat">
      </Box>
      <Divider className="hidden lg:block"/>
    </Box>
  );
}
