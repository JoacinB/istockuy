import {
  Box,
  Flex,
  Card,
  Text,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Badge,
  useColorMode,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { differenceInYears } from "date-fns";
import { BsFillCartPlusFill } from "react-icons/bs";

export default function About() {
  const { colorMode } = useColorMode();
  const textColor = colorMode === "dark" ? "white" : "gray.800";
  const shadowColor = {
    light: "shadow-[5px_8px_30px_-15px_rgba(0,0,0,1)]",
    dark: "shadow-[5px_5px_30px_-15px_rgba(150,150,150,1)]",
  };
  const borderColor = colorMode === "dark" ? "#2B2A2A" : "#D4D5D5";
  const backgroundColor =
    colorMode === "dark" ? "bg-black/40" : "bg-slate-100/40";
  const Birthday = new Date(2002, 1, 8);
  const age = differenceInYears(new Date(), Birthday);

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
      <Box className="mx-auto text-center">
        <Text className="mb-20 text-3xl font-bold xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl">
          Catálogo
          <Divider mt={10}/></Text>
        
        <Flex className="justify-center mx-auto">
          <Box
            w="75%" 
            className={`text-left ${backgroundColor} p-3 mr-3 rounded-xl border-2 border-${borderColor}`}
          >
          <Flex className="justify-center mx-auto" direction={["column", "column", "row"]}>
            <Card maxW='sm' m={2}>
              <CardBody>
                <Image
                  src='/airpodspro2productos.png'
                  alt='AirPods Pro 2'
                  borderRadius='lg'
                />
                <Divider />
                <Stack mt='6' spacing='3' >
                  <Heading size='md'>AirPods Pro 2 </Heading>
                  <Box>
                    <Badge variant="outline" colorScheme='green'>Envío gratis</Badge> <Badge variant="outline" colorScheme='purple'>Nuevo</Badge>
                  </Box>
                  <Text color='blue.600' fontSize='2xl'>
                    U$S 140
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    Comprar
                  </Button>
                  <IconButton aria-label="Agregar al carrito" icon={<Icon as={BsFillCartPlusFill} boxSize={6}/>} />
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW='sm' m={2}>
              <CardBody>
                <Image
                  src='/airpodsproproductos.png'
                  alt='AirPods Pro'
                  borderRadius='lg'
                />
                <Divider />
                <Stack mt='6' spacing='3' >
                  <Heading size='md'>AirPods Pro</Heading>
                  <Box>
                    <Badge variant="outline" colorScheme='green'>Envío gratis</Badge>
                  </Box>
                  <Text color='blue.600' fontSize='2xl'>
                    U$S 120
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    Comprar
                  </Button>
                  <IconButton aria-label="Agregar al carrito" icon={<Icon as={BsFillCartPlusFill} boxSize={6}/>} />
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW='sm' m={2}>
              <CardBody>
                <Image
                  src='/airpodsmax.png'
                  alt='AirPods Max'
                  borderRadius='lg'
                />
                <Divider />
                <Stack mt='6' spacing='3' >
                  <Heading size='md'>AirPods Max</Heading>
                  <Box>
                    <Badge variant="outline" colorScheme='green'>Envío gratis</Badge> <Badge variant="outline" colorScheme='purple'>Nuevo</Badge>
                  </Box>
                  <Text color='blue.600' fontSize='2xl'>
                    U$S 250
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    Comprar
                  </Button>
                  <IconButton aria-label="Agregar al carrito" icon={<Icon as={BsFillCartPlusFill} boxSize={6}/>} />
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW='sm' m={2}>
              <CardBody>
                <Image
                  src='/airpodspro2productos.png'
                  alt='AirPods Pro 2'
                  borderRadius='lg'
                />
                <Divider />
                <Stack mt='6' spacing='3' >
                  <Heading size='md'>AirPods Pro 2 </Heading>
                  <Box>
                    <Badge variant="outline" colorScheme='green'>Envío gratis</Badge> <Badge variant="outline" colorScheme='purple'>Nuevo</Badge>
                  </Box>
                  <Text color='blue.600' fontSize='2xl'>
                    U$S 140
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    Comprar
                  </Button>
                  <IconButton aria-label="Agregar al carrito" icon={<Icon as={BsFillCartPlusFill} boxSize={6}/>} />
                </ButtonGroup>
              </CardFooter>
            </Card>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
