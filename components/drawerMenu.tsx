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
        bg="blue.900" // Couleur de fond du bouton
        color="white" // Couleur du texte
        _hover={{ bg: "teal.600" }} // Change la couleur de fond au survol
        opacity="75" // Opacité du bouton (0 = transparent, 100 = opaque)
        _groupHover={{ opacity: "100" }} // Opacité du bouton au survol
        _active={{ bg: "teal.700" }} // Couleur de fond lorsque le bouton est actif
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
