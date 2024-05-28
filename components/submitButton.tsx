"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="text-black">
      Add
      {/* {pending ? "Sending Message..." : "Send Message"} */}
    </button>
  );
}
