import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({ title }: { title: string }) => (
  <>
    <Flex
      justifyContent='center'
      alignItems='center'
      bgGradient='linear(to-l, heroGradientStart, heroGradientEnd)'
      bgClip='text'
      mt={"100px"}
    >
      <Heading fontSize='5vw'>{title}</Heading>
    </Flex>
  </>
);

Hero.defaultProps = {
  title: "Design & Code",
};
