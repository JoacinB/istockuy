import { useColorMode, IconButton, Tooltip } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function ColorModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = { light: "gray.800", dark: "gray.50" };

  return (
    <Tooltip label={colorMode === "light" ? "Cambiar a Modo Oscuro" : "Cambiar a Modo Claro"} aria-label={colorMode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"} placement='left' bg={colorMode === "light" ? "#000000" : "#ffffff"} textColor={colorMode === "light" ? "#ffffff" : "#000000"}>
    <IconButton
      icon={colorMode === "light" ? <MoonIcon boxSize={6}/> : <SunIcon boxSize={6}/>}
      aria-label={colorMode === "light" ? "Switch to Dark mode" : "Switch to Light mode"}
      onClick={toggleColorMode}
      bg="transparent"
      color={iconColor[colorMode]}
      _hover={{ bg: "transparent" }}
      _active={{ bg: "transparent" }}
      _focus={{ outline: "none" }}
    />
    </Tooltip>
  );
}

export default ColorModeSwitcher;
