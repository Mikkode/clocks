"use client";

import {
  Box,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
  Flex,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type MenuProps = {
  children: React.ReactNode;
};

export default function DrawerMenu({ children }: MenuProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position="absolute" top="4" left="4" zIndex="999">
      <IconButton
        icon={<HamburgerIcon />}
        aria-label="Open Menu"
        onClick={onOpen}
        bg="blue.900"
        color="white"
        _hover={{ bg: "teal.600" }}
        opacity="75"
        _groupHover={{ opacity: "100" }}
        _active={{ bg: "teal.700" }}
      />

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>{children}</VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
