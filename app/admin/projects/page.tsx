"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getProjects, deleteProject } from "@/lib/admin-actions/project-actions";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      await deleteProject(id);
      setProjects(projects.filter((p) => p._id !== id));
    } catch (err) {
      setError("Failed to delete project");
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Projects ({projects.length})</h1>
        <Link href="/admin/projects/new">
          <Button>Add New Project</Button>
        </Link>
      </div>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project._id} className="relative group">
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                link={project._id}
              />
              <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link href={`/admin/projects/edit/${project._id}`}>
                  <Button size="sm" variant="outline">Edit</Button>
                </Link>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(project._id)}>
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}