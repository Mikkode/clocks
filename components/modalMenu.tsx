"use client";

import {
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
} from "@chakra-ui/react";

import { SettingsIcon } from "@chakra-ui/icons";

type MenuProps = {
  children: React.ReactNode;
};

export default function ModalMenu({ children }: MenuProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modals</Button> */}
      <IconButton
        icon={<SettingsIcon />}
        aria-label="Open Settings"
        onClick={onOpen}
        position="fixed" // Fixe la position pour qu'il flotte
        top="4" // Distance depuis le haut
        right="4" // Distance depuis la droite
        backgroundColor="gray.800" // Couleur de fond
        color="white" // Couleur de l'icône
        _hover={{ bg: "gray.700" }} // Couleur de fond au survol
        className="shadow-lg" // Ombre pour donner un effet flottant
        zIndex={40}
      />
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent bg="gray.800">
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
