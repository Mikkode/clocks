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
      <IconButton
        icon={<SettingsIcon />}
        aria-label="Open Settings"
        onClick={onOpen}
        position="fixed"
        top="4"
        left="4"
        backgroundColor="gray.800"
        color="white"
        _hover={{ bg: "gray.700" }}
        className="shadow-lg"
        zIndex={9999}
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
