import { Tag } from '@/components/ui/tag';
import { Button, Image as ChakraImage, Link as ChakraLink, Flex, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { LuArrowRight, LuCar, LuClock, LuShield, LuSparkles, LuStar } from "react-icons/lu";

import { Card } from "@/components/home/card";
import { ColorModeButton } from "@/components/ui/color-mode";
import heroCar from "../../public/assets/hero-car.jpeg";

export default function Home() {
  return (
    <>
      <HStack as="header" position="fixed" left={0} right={0} top={0} zIndex={50} bg="blackAlpha.800">
        <HStack as="nav" w="full" alignItems="center" justify="space-between" px={6} py={4}>

          <ChakraLink colorPalette="yellow" alignItems="center" gap={2} asChild>
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

            <ColorModeButton />

            <Button variant="outline" rounded="lg">Acessar</Button>

          </HStack>
        </HStack>
      </HStack>

      <VStack as="main" gap={0}>

        <VStack as="section" position="relative" w="100vw" h="100vh" align="start" justify="center" bgColor="blackAlpha.200">

          <Flex zIndex={1} position="absolute" w="100vw" h="100vh" bgColor="blackAlpha.500/90" />

          {/* asChild permite que voce use os "poderes" do image do chakra(ChakraImage) no componente do next(NextImage)  */}
          <ChakraImage position="absolute" w="100vw" h="100vh" zIndex={0} asChild>
            <NextImage src={heroCar} alt="AutoShine" />
          </ChakraImage>

          <VStack zIndex={2} maxW="2xl" align="start" position="relative" px={6} gap={6}>
            <Tag
              position="relative"
              startElement={<LuSparkles />}
              rounded="lg"
              px={4}
              py={2}
              fontWeight="medium"
              colorPalette="yellow"
            >Excelência em estética automotiva</Tag>

            <Heading
              as="h1"
              fontSize={{ lg: "7xl", md: "5xl" }}
              fontWeight="bold"
              lineHeight="shorter"
              letterSpacing="tight"
            >Seu carro merece o <Text as="span" color="yellow.400" >melhor</Text> cuidado</Heading>

            <Text
              maxW="lg"
              fontSize="lg"
              fontWeight="medium"
              mb={6}
            >
              Transformamos seu veiculo com servicos premium de estética automotiva.
              Agende online e garanta o brilho que seu carro merece.
            </Text>

            <HStack gap={4}>
              <Button rounded="lg" colorPalette="yellow">
                <LuClock />
                Agendar Agora
              </Button>

              <Button rounded="lg">
                Ver Serviços
                <LuArrowRight />
              </Button>
            </HStack>

          </VStack>
        </VStack>

        <VStack as="section" py={24} gap={16}>
          <VStack gap={4}>
            <Heading as="h2" fontSize="4xl" fontWeight="bold">Nossos Serviços</Heading>
            <Text maxW="xl" fontSize="lg" textAlign="center">Oferecemos os melhores serviços de estética automotiva para manter seu veiculo impecavel</Text>
          </VStack>

          <HStack gap={6}>
            <Card
              icon={<LuSparkles color="black" />}
              title="Polimento Premium"
              description="Restauracao completa do brilho original da pintura com técnicas profissionais"
              textFooter="A partir de R$1.200,00"
            />

            <Card
              icon={<LuShield color="black" />}
              title="Vitrificação"
              description="Protecão cerâmica de longa duracao que mantém seu carro impecável por meses."
              textFooter="A partir de R$2.500,00"
            />

            <Card
              icon={<LuCar color="black" />}
              title="Lavagem Detalhada"
              description="Limpeza completa interna e externa com produtos de alta qualidade."
              textFooter="A partir de R$800,00"
            />

            <Card
              icon={<LuStar color="black" />}
              title="Higienização Interna"
              description="Limpeza profunda de bancos, carpetes e painéis com ozônio."
              textFooter="A partir de R$800,00"
            />

          </HStack>

          <Button colorPalette="yellow" rounded="lg">
            Agendar serviço
            <LuArrowRight />
          </Button>

        </VStack>

        <VStack as="footer">
          <ChakraLink colorPalette="yellow" alignItems="center" gap={2} asChild>
            <NextLink href="/">

              <Icon w={7} h={7}>
                <LuCar />
              </Icon>

              <Text fontSize="xl" fontWeight="bold" >Auto Shine</Text>
            </NextLink>
          </ChakraLink>

          <Text fontSize="sm">© 2026 AutoShine Estética Automotiva. Todos os direitos reservados.</Text>
        </VStack>
      </VStack>
    </>
  );
}
