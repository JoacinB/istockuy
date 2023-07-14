import { useColorMode, IconButton, Tooltip } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function MenuBoton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = { light: "gray.800", dark: "gray.50" };

  return (
    <Tooltip  label={colorMode === "light" ? "Menú" : "Menú"} aria-label={colorMode === "light" ? "Menú" : "Menú"} placement='bottom' bg={colorMode === "light" ? "#000000" : "#ffffff"} textColor={colorMode === "light" ? "#ffffff" : "#000000"}>
    <IconButton
      icon={<HamburgerIcon boxSize={6}/>}
      aria-label={colorMode === "light" ? "Menú" : "Menú"}
      bg="transparent"
      color={iconColor[colorMode]}
      _hover={{ bg: "transparent" }}
      _active={{ bg: "transparent" }}
      _focus={{ outline: "none" }}
    />
    </Tooltip>
  );
}

export default MenuBoton;
