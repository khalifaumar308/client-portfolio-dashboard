"use client";
import { useState } from "react";
import { useActionState } from "react";
import { createCapability } from "@/lib/admin-actions/capability-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const defaultCapability = {
  title: "",
  percentage: "",
};

export function CapabilityForm({ onSuccess }: { onSuccess?: () => void }) {
  const [state, formAction, pending] = useActionState(createCapability, null);
  const [capability, setCapability] = useState({ ...defaultCapability });
  const [error, setError] = useState("");

  // Optionally handle error state from server action
  // useEffect(() => {
  //   if (state && typeof state === "object" && "error" in state && state.error) {
  //     setError(`${state.error}`);
  //   } else {
  //     setError("");
  //   }
  // }, [state]);

  return (
    <form className="space-y-6" autoComplete="off" action={formAction} onSubmit={onSuccess}>
      <div className="grid gap-2">
        <Input
          id="title"
          name="title"
          placeholder="Capability"
          value={capability.title}
          onChange={e => setCapability({ ...capability, title: e.target.value })}
          required
        />
      </div>
      <div className="grid gap-2">
        <Input
          id="percentage"
          name="percentage"
          placeholder="Percentage"
          type="number"
          min="0"
          max="100"
          value={capability.percentage}
          onChange={e => setCapability({ ...capability, percentage: e.target.value })}
          required
        />
      </div>
      {error && <div className="text-sm font-medium text-destructive mt-2">{error}</div>}
      <Button type="submit" className="w-full rounded-full" disabled={pending}>
        {pending ? "Saving..." : "Save Capability"}
      </Button>
      <input type="hidden" name="capability" value={JSON.stringify(capability)} />
    </form>
  );
}
