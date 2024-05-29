"use client";

import { Button } from "@chakra-ui/react";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  name: string;
};

export function SubmitButtonAdd({ name }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      colorScheme="teal"
      mr={3}
      isLoading={pending}
      size="md"
    >
      {name}
    </Button>
  );
}

export function SubmitButtonDelete({ name }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="text-sm text-red-500 hover:text-red-700 focus:outline-none focus:text-red-700"
      mr={3}
      isLoading={pending}
      size="sm"
    >
      {name}
    </Button>
  );
}
