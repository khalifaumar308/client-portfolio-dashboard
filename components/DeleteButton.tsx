'use client'
import { deleteCredential } from "@/lib/admin-actions/credentails";
import { Trash2 } from "lucide-react";
import { useTransition } from "react";
import { Button } from "./ui/button";

function DeleteButton({ id }: { id: string }) {
  const [pending, startTransition] = useTransition();
  return (
    <Button
      variant="destructive"
      size="icon"
      className="ml-2"
      disabled={pending}
      onClick={() => startTransition(() => deleteCredential(id))}
      title="Delete"
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
}
export default DeleteButton