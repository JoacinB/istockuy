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

export default function Catalogo() {
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
        <Text className="mb-20 text-3xl font-bold xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl" fontFamily="Greycliffcf-Bold">
          Catálogo
          </Text>
        
        <Flex className="justify-center mx-auto">
          <Box
            className={`text-left p-3 mr-3 sm:w-full lg:w-3/4`}
          >
            <Heading size='md' className="text-center mb-4" fontFamily="Greycliffcf-Bold">AirPods</Heading>
          <Flex className="justify-center mx-auto" direction={["column", "column", "row"]}>
            <Card maxW='sm' m={2}>
              <CardBody>
                <Image
                  src='/airpodspro2productos.png'
                  alt='AirPods Pro 2'
                  borderRadius='lg'
                />
                <Divider />
                <Stack mt='6' spacing='3'>
                  <Heading size='md' fontFamily="Greycliffcf-ExtraBold">AirPods Pro 2</Heading>
                  <Box>
                    <Badge variant="outline" colorScheme='green'>Envío gratis</Badge> <Badge variant="outline" colorScheme='purple'>Nuevo</Badge>
                  </Box>
                  <Text color={textColor} fontSize='2xl' fontFamily="Greycliffcf-Regular">
                    $ 4500,00
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
                  <Heading size='md' fontFamily="Greycliffcf-ExtraBold">AirPods Pro</Heading>
                  <Box>
                    <Badge variant="outline" colorScheme='green'>Envío gratis</Badge>
                  </Box>
                  <Text color={textColor} fontSize='2xl' fontFamily="Greycliffcf-Regular">
                    $ 3760,00
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
                  <Heading size='md' fontFamily="Greycliffcf-ExtraBold">AirPods Max</Heading>
                  <Box>
                    <Badge variant="outline" colorScheme='green'>Envío gratis</Badge> <Badge variant="outline" colorScheme='purple'>Nuevo</Badge>
                  </Box>
                  <Text color={textColor} fontSize='2xl' fontFamily="Greycliffcf-Regular">
                    $ 17240,00
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
            {/* <Card maxW='sm' m={2}>
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
                  <Text color={textColor} fontSize='2xl'>
                    U$S 139.99
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
            </Card> */}
            </Flex>
          </Box>
        </Flex>

        <Divider my={10}/>

        <Flex className="justify-center mx-auto">
          <Box
            className={`text-left p-3 mr-3 sm:w-full lg:w-3/4`}
          >
            <Heading size='md' className="text-center mb-4" fontFamily="Greycliffcf-Bold">Accesorios</Heading>
          <Flex className="justify-center mx-auto" direction={["column", "column", "row"]}>
            <Card maxW='sm' m={2}>
              <CardBody>
                <Image
                  src='/magsafecharger.png'
                  alt='MagSafe Charger'
                  borderRadius='lg'
                />
                <Divider />
                <Stack mt='6' spacing='3' >
                  <Heading size='md' fontFamily="Greycliffcf-ExtraBold">Cargador MagSafe</Heading>
                  <Box>
                    <Badge variant="outline" colorScheme='green'>Envío gratis</Badge> <Badge variant="outline" colorScheme='purple'>Nuevo</Badge>
                  </Box>
                  <Text color={textColor} fontSize='2xl' fontFamily="Greycliffcf-Regular">
                    $ 1500,00
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
                  src='/bateriamagsafe.png'
                  alt='Batería MagSafe'
                  borderRadius='lg'
                />
                <Divider />
                <Stack mt='6' spacing='3' >
                  <Heading size='md' fontFamily="Greycliffcf-ExtraBold">Batería MagSafe</Heading>
                  <Box>
                    <Badge variant="outline" colorScheme='green'>Envío gratis</Badge> <Badge variant="outline" colorScheme='purple'>Nuevo</Badge>
                  </Box>
                  <Text color={textColor} fontSize='2xl' fontFamily="Greycliffcf-Regular">
                    $ 2190,00
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
                    src='/cargadorusbc.png'
                    alt='Cargador 20W USB-C'
                    borderRadius='lg'
                  />
                  <Divider />
                  <Stack mt='6' spacing='3' >
                    <Heading size='md' fontFamily="Greycliffcf-ExtraBold">Cargador 20W USB-C</Heading>
                    <Box>
                      <Badge variant="outline" colorScheme='green'>Envío gratis</Badge>
                    </Box>
                    <Text color={textColor} fontSize='2xl' fontFamily="Greycliffcf-Regular">
                      $ 750,00
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
                  src='/cable.png'
                  alt='Cable 1m USB-C a Lightning'
                  borderRadius='lg'
                />
                <Divider />
                <Stack mt='6' spacing='3' >
                  <Heading size='md' fontFamily="Greycliffcf-ExtraBold">Cable 1m USB-C a Lightning</Heading>
                  <Box>
                    <Badge variant="outline" colorScheme='green'>Envío gratis</Badge>
                  </Box>
                  <Text color={textColor} fontSize='2xl' fontFamily="Greycliffcf-Regular">
                    $ 360,00
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
