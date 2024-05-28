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
import { useEffect, useState } from "react";
import CitiesList from "./citiesList";
import { addCity, getCitiesCookie } from "@/libs/data";
import { SubmitButton } from "./submitButton";
import { useFormState } from "react-dom";
import { toast } from "./ui/use-toast";

const initialState = {
  success: true,
  message: "",
};

export default function CityManager() {
  const [cities, setCities] = useState<string[]>([]);
  const [state, formAction] = useFormState(addCity, initialState);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (state.message.length > 0) {
      if (state.success) {
        toast({
          title: "Success",
          description: state.message,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: state.message,
        });
      }
    }

    const fetchData = async () => {
      const citiesCookie = await getCitiesCookie();
      setCities(citiesCookie);
    };

    fetchData();
  }, [state]);

  return (
    <Box position="absolute" top="4" left="4" zIndex="999">
      {/* Menu burger flottant */}
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

      {/* Drawer pour le menu */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              {/* Utilisez le composant CitiesList */}
              <CitiesList citiesList={cities} />
              <form action={formAction}>
                <input
                  type="text"
                  name="city"
                  placeholder="city..."
                  style={{ color: "black" }}
                ></input>
                <SubmitButton />
              </form>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
