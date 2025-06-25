"use client";
import { useState } from "react";
import { useActionState } from "react";
import { createProject, ProjectUpdate } from "@/lib/admin-actions/project-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import UploadImage from "@/components/admin/UploadImage";

interface ProjectFormProps {
  project?: Partial<ProjectUpdate>;
  editMode?: boolean;
}

const defaultProject = {
  title: "",
  description: "",
  image: "",
  tags: [],
  link: "",
};

export function ProjectsForm({ project, editMode }: ProjectFormProps) {
  const [state, formAction, pending] = useActionState(createProject, null);
  const [finalProject, setFinalProject] = useState(project || { ...defaultProject });
  const [error, setError] = useState("");

  // useEffect(() => {
  //   if (state && typeof state === "object" && "error" in state && state.error) {
  //     setError(`${state.error}`);
  //   } else {
  //     setError("");
  //   }
  // }, [state]);

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFinalProject({ ...finalProject, tags: e.target.value.split(",").map(tag => tag.trim()) });
  };

  const handleImageUpload = (url: string) => {
    setFinalProject({ ...finalProject, image: url });
  };

  return (
    <div className="max-w-2xl mx-auto w-full px-2 sm:px-4 md:px-0 py-8">
      <form className="space-y-8" autoComplete="off" action={formAction}>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Input
              id="title"
              name="title"
              placeholder="Enter project title"
              value={finalProject.title}
              onChange={e => setFinalProject({ ...finalProject, title: e.target.value })}
              required
              className="rounded-lg"
            />
          </div>
          <div className="grid gap-2">
            <Textarea
              id="description"
              name="description"
              placeholder="Enter project description"
              value={finalProject.description}
              onChange={e => setFinalProject({ ...finalProject, description: e.target.value })}
              required
              className="min-h-[100px] rounded-lg"
            />
          </div>
          <div className="grid gap-2">
            <label className="font-medium">Project Image</label>
            <UploadImage onUpload={handleImageUpload} />
            {finalProject.image && (
              <img src={finalProject.image} alt="Project preview" className="w-40 rounded shadow mt-2" />
            )}
          </div>
          <div className="grid gap-2">
            <Input
              id="tags"
              name="tags"
              placeholder="Comma separated tags"
              value={finalProject.tags?.join(", ") || ""}
              onChange={handleTagsChange}
              className="rounded-lg"
            />
          </div>
          {/* <div className="grid gap-2">
            <Input
              id="link"
              name="link"
              placeholder="Project link"
              value={finalProject.link}
              onChange={e => setFinalProject({ ...finalProject, link: e.target.value })}
              className="rounded-lg"
            />
          </div> */}
        </div>
        {error && <div className="text-sm font-medium text-destructive mt-4">{error}</div>}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button type="submit" className="w-full rounded-full" disabled={pending}>
            {pending ? (editMode ? "Updating..." : "Creating...") : (editMode ? "Update Project" : "Create Project")}
          </Button>
        </div>
        <input type="hidden" name="project" value={JSON.stringify(finalProject)} />
      </form>
    </div>
  );
}
