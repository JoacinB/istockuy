import { Box, Flex, IconButton, Tooltip, Icon } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";
import { useColorMode } from "@chakra-ui/react";

function NavBar() {
  const { colorMode } = useColorMode();
  return (
    <Box
      className="h-14 flex w-full fixed top-0 right-0 bg-black justify-center items-center"
    >
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
        <Link href="#about-section">
          <Tooltip
            label="About"
            aria-label="About"
            placement="left"
            bgGradient="linear(to-l, #6927d9, #d446ab)"
            textColor={"white"}
          >
            <IconButton
              aria-label="About"
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
    </Box>
  );
}

export default NavBar;
