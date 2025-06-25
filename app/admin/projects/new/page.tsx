"use client";
import { ProjectsForm } from "@/components/admin/projects-form";

export default function AdminProjectsNewPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Add New Project</h1>
      <ProjectsForm />
    </div>
  );
}