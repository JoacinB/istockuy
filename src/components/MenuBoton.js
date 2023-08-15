import { useColorMode, IconButton, MenuButton, Menu, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon, CalendarIcon } from "@chakra-ui/icons";
import { BsShieldCheck } from "react-icons/bs";
import Link from "next/link";

function MenuBoton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = { light: "gray.800", dark: "gray.50" };

  return (
    <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Menú'
          icon={<HamburgerIcon boxSize={6}/>}
          bg="transparent"
          color={iconColor[colorMode]}
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
          _focus={{ outline: "none" }}
        />
        <MenuList>
          <Link href="/garantia" passHref>
            <MenuItem icon={<BsShieldCheck size={16}/>}>
              Garantía
            </MenuItem>
          </Link>
        </MenuList>
    </Menu>
    // <IconButton
    //   icon={<HamburgerIcon boxSize={6}/>}
    //   aria-label={colorMode === "light" ? "Menú" : "Menú"}
    //   bg="transparent"
    //   color={iconColor[colorMode]}
    //   _hover={{ bg: "transparent" }}
    //   _active={{ bg: "transparent" }}
    //   _focus={{ outline: "none" }}
    // />
    // </Tooltip>
  );
}

export default MenuBoton;
