import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Link,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useColorModeValue("gray.200", "gray.600");
  const [navItems, setNavItems] = useState([
    { label: "Home", path: "/" },
    { label: "Contact", path: "/contact" },
  ]);

  return (
    <Flex bg={bg} w='100%' p={4} align='center' justify='space-between'>
      <Box>
        <Text fontSize='xl' fontWeight='bold'>
          Just-intime
        </Text>
      </Box>
      <Box display={{ base: "none", md: "block" }}>
        <Flex align='center' justify='space-between'>
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} fontWeight='bold' mr={4}>
              {item.label}
            </Link>
          ))}
        </Flex>
      </Box>
      <IconButton
        size='md'
        icon={<HamburgerIcon />}
        aria-label='Open Menu'
        display={{ md: "none" }}
        onClick={onOpen}
        bg={mobileNav}
      />
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: 4, md: 8 }}
            >
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} fontWeight='bold'>
                  {item.label}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
