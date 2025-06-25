import { ProjectsForm } from "@/components/admin/projects-form";
import { getProject } from "@/lib/admin-actions/project-actions";

async function page({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Edit Project</h1>
      <ProjectsForm project={project} editMode />
    </div>
  );
}

export default page;
