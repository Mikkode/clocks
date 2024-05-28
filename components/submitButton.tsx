"use client";

import { Button } from "@chakra-ui/react";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      colorScheme="teal"
      mr={3}
      isLoading={pending}
      size="md"
    >
      Add Clock
    </Button>
  );
}
