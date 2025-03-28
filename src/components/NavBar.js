import { Box, Flex, IconButton, Tooltip, Icon } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";
import MenuBoton from "./MenuBoton";
import { useColorMode } from "@chakra-ui/react";
import Carrito from "./Carrito";

function NavBar() {
  const { colorMode } = useColorMode();
  return (
    <Box
      className="h-14 flex w-full fixed top-0 bg-transparent backdrop-blur justify-center items-center"
      boxShadow={colorMode === "dark" ? '5px 5px 30px -15px rgba(255,255,255,0.2)' : '5px 8px 30px -15px rgba(0,0,0,0.2)'}>
      <Flex className="flex-col h-full relative justify-center items-center">
        {/* <Link href="#home-section">
          <Tooltip
            label="Home"
            aria-label="Home"
            placement="left"
            bgGradient="linear(to-l, #6927d9, #d446ab)"
            textColor={"white"}
          >
            <IconButton
              aria-label="Home"
              bg="transparent"
              color={colorMode}
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
              _focus={{ outline: "none" }}
              icon={<Icon as={BiHome} boxSize={7} />}
            />
          </Tooltip>
        </Link>
        <Link href="#catalogo-section">
          <Tooltip
            label="Catalogo"
            aria-label="Catalogo"
            placement="left"
            bgGradient="linear(to-l, #6927d9, #d446ab)"
            textColor={"white"}
          >
            <IconButton
              aria-label="Catalogo"
              bg="transparent"
              color={colorMode}
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
              _focus={{ outline: "none" }}
              icon={<Icon as={BiUser} boxSize={7} />}
            />
          </Tooltip>
        </Link>
        <Link href="#portfolio-section">
          <Tooltip
            label="Portfolio"
            aria-label="Portfolio"
            placement="left"
            bgGradient="linear(to-l, #6927d9, #d446ab)"
            textColor={"white"}
          >
            <IconButton
              aria-label="Portfolio"
              bg="transparent"
              color={colorMode}
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
              _focus={{ outline: "none" }}
              icon={<Icon as={BiBriefcase} boxSize={7} />}
            />
          </Tooltip>
        </Link>
        <Link href="#contact-section">
          <Tooltip
            label="Contact"
            aria-label="Contact"
            placement="left"
            bgGradient="linear(to-l, #6927d9, #d446ab)"
            textColor={"white"}
          >
            <IconButton
              aria-label="Contact"
              bg="transparent"
              color={colorMode}
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
              _focus={{ outline: "none" }}
              icon={<Icon as={BiEnvelope} boxSize={7} />}
            />
          </Tooltip>
        </Link> */}
        <ColorModeSwitcher />
      </Flex>
      <MenuBoton />
      {/* <Carrito/> */}
    </Box>
  );
}

export default NavBar;
