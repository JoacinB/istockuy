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
    words: ["Montevideo", "Canelones", "Maldonado", "Rocha", "Treinta y Tres", "Cerro Largo", "Rivera", "Artigas", "Salto", "Paysandú", "Río Negro", "Soriano", "Colonia", "San José", "Florida", "Lavalleja", "Durazno", "Tacuarembó", "Flores"],
    loop: 0,
    deleteSpeed: 40,
  });
  const textColor = colorMode === "dark" ? "white" : "gray.800";
  return (
    <Box
      color={textColor}
      px={8}
      className="invisible py-10 md:py-20 md:visible "
      position="relative"
      overflow="hidden"
      h={["auto", "auto", "auto", "100vh"]}
    >
      <video
        src="home-video.mp4"
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      ></video>
      {/* <Heading as="h2" fontSize="6xl" bgGradient="linear(to-r, #6927d9, #d446ab)" bgClip="text" pb={4} className="hidden lg:block text-center">
          {text}
          <Cursor></Cursor>
      </Heading> */}
      <Flex className="justify-center items-center align-middle h-full" flexDirection="column">
        <Heading fontFamily="Greycliffcf-ExtraBold" size='4xl' fontSize={{ base: '24px', md: '40px', lg: '112px' }} bgImage="linear-gradient(7deg, #da35ab 12.72%, #632687 58.73%, #6f359d 101.06%)" backgroundClip="text" textColor="transparent">
          iStock UY
        </Heading>
        <Heading as="h2" fontSize="3xl" className="text-center text-white">
          {text}
          <Cursor></Cursor>
        </Heading>
      </Flex>
      <Box       
      h={["auto", "auto", "auto", "100vh"]}>
      </Box>
      <Divider className="hidden lg:block"/>
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height="15%"
        backgroundImage="linear-gradient(to top, rgba(200, 200, 200, 0.1), rgba(255, 255, 255, 0))"
        zIndex="0"
      />
    </Box>
  );
}
