"use client";
import { useActionState, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  createExperience,
  ExperienceUpdate,
} from "@/lib/admin-actions/experience";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface ExperienceFormProps {
  experience?: ExperienceUpdate;
  editMode?: boolean;
}

const defaultExperience:ExperienceUpdate = {
  company: "",
  role: "",
  period: "",
  description: "",
  type:'Professional'
};

export function ExperienceForm({ experience, editMode }: ExperienceFormProps) {
  const [state, formAction, pending] = useActionState(createExperience, null);
  const [finalExperience, setFinalExperience] = useState<ExperienceUpdate>(
    experience || { ...defaultExperience }
  );
  const [error, setError] = useState("");

  useEffect(() => {
    if (state && typeof state === "object" && "error" in state && state.error) {
      setError(`${state.error}`);
    } else {
      setError("");
    }
  }, [state]);

  return (
    <div className="max-w-2xl mx-auto w-full px-2 sm:px-4 md:px-0 py-8">
      <Card className="shadow-lg border-none bg-white/90 dark:bg-background/80 rounded-2xl">
        <CardContent className="pt-8 pb-6 px-4 sm:px-8">
          <form className="space-y-8" autoComplete="off" action={formAction}>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title" className="font-semibold">
                  Title <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter experience title"
                  value={finalExperience.role}
                  onChange={(e) =>
                    setFinalExperience({
                      ...finalExperience,
                      role: e.target.value,
                    })
                  }
                  required
                  className="rounded-lg"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company" className="font-semibold">
                  Company <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Enter company name"
                  value={finalExperience.company}
                  onChange={(e) =>
                    setFinalExperience({
                      ...finalExperience,
                      company: e.target.value,
                    })
                  }
                  required
                  className="rounded-lg"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="startDate" className="font-semibold">
                    Start Period <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="startDate"
                    name="startDate"
                    value={finalExperience.period}
                    onChange={(e) =>
                      setFinalExperience({
                        ...finalExperience,
                        period: e.target.value,
                      })
                    }
                    required
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description" className="font-semibold">
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe your experience"
                  value={finalExperience.description}
                  onChange={(e) =>
                    setFinalExperience({
                      ...finalExperience,
                      description: e.target.value,
                    })
                  }
                  className="min-h-[100px] rounded-lg"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role" className="font-semibold">
                  Experiance Type <span className="text-destructive">*</span>
                </Label>
                <Select
                  name="type"
                  value={finalExperience?.type || "Professional"}
                  onValueChange={(val) =>
                    setFinalExperience({
                      ...finalExperience,
                      type: val as "Professional" | "Advisory",
                    })
                  }
                >
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='Professional'>
                      Professional
                    </SelectItem>
                    <SelectItem value='Advisory'>
                      Advisory
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {error && (
              <div className="text-sm font-medium text-destructive mt-4">
                {error}
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button
                type="submit"
                className="w-full rounded-full"
                disabled={pending}
              >
                {!editMode
                  ? pending
                    ? "Creating..."
                    : "Create Experience"
                  : pending
                  ? "Updating..."
                  : "Update Experience"}
              </Button>
            </div>
            <input
              type="hidden"
              name="experience"
              value={JSON.stringify(finalExperience)}
            />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
