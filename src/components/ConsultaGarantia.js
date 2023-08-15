import {
    Box,
    Text,
    Heading,
    useColorMode,
    PinInput,
    PinInputField,
    HStack,
  } from "@chakra-ui/react";
  
  export default function ConsultaGarantia() {
    const { colorMode } = useColorMode();
    const textColor = colorMode === "dark" ? "white" : "gray.800";
    const shadowColor = {
      light: "shadow-[5px_8px_30px_-15px_rgba(0,0,0,1)]",
      dark: "shadow-[5px_5px_30px_-15px_rgba(150,150,150,1)]",
    };
    const borderColor = colorMode === "dark" ? "#2B2A2A" : "#D4D5D5";
    const backgroundColor =
      colorMode === "dark" ? "bg-black/40" : "bg-slate-100/40";
  
    return (
      <Box
        // style={{
        //   background: `url('/fondoabout.png') ${colorMode === "dark" ? "black" : "white"} no-repeat center`,
        // }}
        color={textColor}
        px={8}
        py={5}
        h={["auto", "auto", "auto", "100-full"]}
      >
        <Box className="mx-auto text-center mt-14">
            <Heading as="h1" size="xl">
                Consulta de Garantía
            </Heading>
            <Box>
                <Text fontSize="lg" className="mt-10">
                    Ingrese su número de garantía para consultar el estado de la misma.
                </Text>
            </Box>
            <Box className="mt-10">
              <HStack className="justify-center">
                <PinInput type='alphanumeric'>
                  <PinInputField textTransform="uppercase"/>
                  <PinInputField textTransform="uppercase"/>
                  <PinInputField textTransform="uppercase"/>
                  <PinInputField textTransform="uppercase"/>
                  <Text fontSize="lg">-</Text>
                  <PinInputField textTransform="uppercase"/>
                  <PinInputField textTransform="uppercase"/>
                  <PinInputField textTransform="uppercase"/>
                  <Text fontSize="lg">-</Text>
                  <PinInputField textTransform="uppercase"/>
                  <PinInputField textTransform="uppercase"/>
                  <PinInputField textTransform="uppercase"/>
                  <PinInputField textTransform="uppercase"/>
                </PinInput>
              </HStack>
            </Box>
        </Box>
      </Box>
    );
  }
  