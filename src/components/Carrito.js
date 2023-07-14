import { useColorMode, IconButton, Tooltip } from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";

function Carrito() {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = { light: "gray.800", dark: "gray.50" };

  return (
    <Tooltip  label={colorMode === "light" ? "Carrito" : "Carrito"} aria-label={colorMode === "light" ? "Carrito" : "Carrito"} placement='right' bg={colorMode === "light" ? "#000000" : "#ffffff"} textColor={colorMode === "light" ? "#ffffff" : "#000000"}>
    <IconButton
      icon={<BsFillCartFill size={22}/>}
      aria-label={colorMode === "light" ? "Carrito" : "Carrito"}
      bg="transparent"
      color={iconColor[colorMode]}
      _hover={{ bg: "transparent" }}
      _active={{ bg: "transparent" }}
      _focus={{ outline: "none" }}
    />
    </Tooltip>
  );
}

export default Carrito;
