import {
  Link as ChakraLink,
  Text,
  Flex,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import Image from "next/image";

// import { DarkModeSwitch } from "../components/DarkModeSwitch";
import img from "../public/images/img.png";

const Index = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Container height='100%' width={"100%"}>
      <Hero />
      <Container height='10vh' width={"70%"}>
        <Text color='text' fontSize='2xl' as='b' mt={5}>
          Hi there 👋🏼 My name is Justin, I'm a full-stack developer based in
          Hong Kong, whether you're looking to build a new website or optimize
          your existing project, I craft elegant, dynamic solutions that connect
          with your audience.
        </Text>
      </Container>
      <Container width={"70%"} mt={"60px"}>
        <Flex
          alignItems='center'
          mt={5}
          width={"100%"}
          direction={isLargerThan768 ? "row" : "column-reverse"}
        >
          <Box flex='1'>
            <Text fontSize='2xl' mt={"50px"} as='b'>
              Services
            </Text>
            <br />
            <Box borderWidth='1px' borderRadius='lg' p='6' mt={"24px"}>
              <Text color='text' fontSize='1xl' as='b' mt={"50px"}>
                E-commerce Development:
              </Text>
              <Text fontSize='md'>
                Create powerful e-commerce websites with customized shopping
                carts, secure payment gateways, and integrations to grow your
                online business.
              </Text>
            </Box>
            <Box borderWidth='1px' borderRadius='lg' p='6' mt={"24px"}>
              <Text color='text' fontSize='1xl' as='b' mt={"50px"}>
                Web Development:
              </Text>
              <Text fontSize='md'>
                Build fast, responsive, and scalable web applications that are
                customized to your business needs.
              </Text>
            </Box>
            <Box borderWidth='1px' borderRadius='lg' p='6' mt={"24px"}>
              <Text color='text' fontSize='1xl' as='b' mt={"50px"}>
                Website UX/UI Design:
              </Text>
              <Text fontSize='md'>
                Focus on creating visually stunning and intuitive user
                interfaces that make a lasting impact on your customers.
              </Text>
            </Box>
          </Box>
          <Box flex='1' p='6' mt={"24px"}>
            <Image src={img} alt='services' width={500} height={500} />
          </Box>
        </Flex>
      </Container>

      {/* <DarkModeSwitch /> */}
    </Container>
  );
};

export default Index;
