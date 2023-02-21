import { Flex, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialContact = () => {
  return (
    <Flex>
      <a href='https://github.com/thisjust-in'>
        <Icon as={FaGithub} boxSize={6} mr={4} />
      </a>
      <a href='https://www.linkedin.com/in/justin-ho-developer/'>
        <Icon as={FaLinkedin} boxSize={6} />
      </a>
    </Flex>
  );
};

export default SocialContact;
