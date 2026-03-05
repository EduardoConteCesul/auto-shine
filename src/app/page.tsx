import { HStack, Link as ChakraLink, Image as ChakraImage, Text, Icon, Button, VStack } from "@chakra-ui/react";
import NextLink from "next/link"
import NextImage from "next/image"
import { LuCar } from "react-icons/lu";

import heroCar from "../../public/assets/hero-car.jpeg"

export default function Home() {
  return (
    <>
      <HStack as="header" position="fixed" left={0} right={0} top={0} zIndex={50} bg="blackAlpha.200">
        <HStack as="nav" w="full" alignItems="center" justify="space-between" px={6} py={4}>

          <ChakraLink alignItems="center" gap={2} asChild>
            <NextLink href="/">

              <Icon w={7} h={7}>
                <LuCar />
              </Icon>

              <Text fontSize="xl" fontWeight="bold" >Auto Shine</Text>
            </NextLink>
          </ChakraLink>


          <HStack justify="center" gap={8}>
            <ChakraLink asChild>
              <NextLink href="/">
                Inicio
              </NextLink>
            </ChakraLink>
            <ChakraLink asChild>
              <NextLink href="#servicos">
                Serviços
              </NextLink>
            </ChakraLink>
            <ChakraLink asChild>
              <NextLink href="/agendar">
                Agendar
              </NextLink>
            </ChakraLink>

            <Button variant="outline" rounded="lg">Acessar</Button>

          </HStack>
        </HStack>

      </HStack>

      <VStack as="main" gap={0}>
        <VStack as="section">
          <ChakraImage w="100vw" h="100vh">
            <NextImage src={heroCar} alt="teste"></NextImage>
          </ChakraImage>
        </VStack>
      </VStack>
    </>
  );
}
