import { Box, Text, GridItem } from "@chakra-ui/react";

const PortfolioSection = () => {
  return (
    <>
      <Box flex='1'>
        <Text fontSize='2xl' as='b'>
          Featured Work
        </Text>
        <br />
      </Box>
      <Box flex='1' p='6' mt={"24px"}>
        {/* <Image src={img} alt='services' width={500} height={500} /> */}
      </Box>
    </>
  );
};

export default PortfolioSection;
