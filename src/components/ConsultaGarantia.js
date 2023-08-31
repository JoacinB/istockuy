import {
    Box,
    Text,
    Heading,
    useColorMode,
    PinInput,
    PinInputField,
    HStack,
    Spinner,
    Icon,
    VStack,
    Divider,
  } from "@chakra-ui/react";
  import { CheckIcon, CloseIcon, WarningTwoIcon } from '@chakra-ui/icons';
  import { useEffect, useState } from "react";
  import garantiaService from "@/services/garantiaService";
  
  export default function ConsultaGarantia() {
    const { colorMode } = useColorMode();
    const textColor = colorMode === "dark" ? "white" : "gray.800";
    const shadowColor = {
      light: "shadow-[5px_8px_30px_-15px_rgba(0,0,0,1)]",
      dark: "shadow-[5px_5px_30px_-15px_rgba(150,150,150,1)]",
    };
    const borderColor = colorMode === "dark" ? "#2B2A2A" : "#D4D5D5";
    const backgroundColor = colorMode === "dark" ? "bg-black/40" : "bg-slate-100/40";
    const [pinValue, setPinValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [warrantyInfo, setWarrantyInfo] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
      if (pinValue.length === 11) {
        setLoading(true);
        fetchWarranty(pinValue)
          .then(data => {
            console.log(data);
            if (data.notFound) {
              setError(true);
            } else {
              setWarrantyInfo(data);
              setError(false);
            }
          })
          .catch(() => {
            setError(true);
          })
          .finally(() => setLoading(false));
      }
    }, [pinValue]);    
  
    async function fetchWarranty(idGarantia) {
      try {
        const response = await garantiaService.getGarantia(idGarantia);
        if (response.status === 404) {
          throw new Error('Garantía no encontrada');
        }
        return response;
      } catch (error) {
        throw error;
      }
    }
  
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
                <PinInput type='alphanumeric' onChange={(value) => setPinValue(value)}>
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
            <Box className="mt-10">
              {loading && <Spinner />}
              {!loading && pinValue.length === 11 && (
                <Box
                bg={error ? (colorMode === "dark" ? "#8b0000" : "#8b0000") 
                : warrantyInfo?.es_valida ? (colorMode === "dark" ? "#00722a" : "#00722a")
                : (colorMode === "dark" ? "#DD6B20" : "#DD6B20")}
                  boxShadow="md"
                  borderRadius="lg"
                  p={4}
                  width="100%"
                  maxW="400px"
                  mx="auto"
                  textColor="white"
                >
                  <VStack spacing={3} align="start">
                    {error ? (
                        <HStack spacing={2}>
                          <Icon as={CloseIcon} color="white" w={4} h={4} />
                          <Text fontSize="md">No hay registros para ese número de garantía.</Text>
                        </HStack>
                    ) : (
                      <>
                        <HStack spacing={2}>
                          {warrantyInfo?.es_valida ? (
                            <>
                              <Icon as={CheckIcon} color="white" w={5} h={5} />
                              <Text fontSize="md">Garantía válida</Text>
                            </>
                          ) : (
                            <>
                              <Icon as={WarningTwoIcon} color="white" w={5} h={5} />
                              <Text fontSize="md">Garantía no válida</Text>
                            </>
                          )}
                        </HStack>
                        <Divider />
                        <Text fontSize="md">Fecha de compra: {warrantyInfo?.created_at}</Text>
                        {warrantyInfo?.productos && warrantyInfo.productos.length > 1 ? (
                          <Text fontSize="md">Productos: {warrantyInfo.productos.join(', ')}</Text>
                        ) : (
                          <Text fontSize="md">Producto: {warrantyInfo?.productos && warrantyInfo.productos[0]}</Text>
                        )}
                        <Text fontSize="md">Garantía válida hasta: {warrantyInfo?.valida_hasta}</Text>
                      </>
                    )}
                  </VStack>
                </Box>
              )}
            </Box>
        </Box>
      </Box>
    );
  }