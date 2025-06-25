'use server';
import { revalidatePath } from "next/cache";
import { connectToMongoDB } from "../models/connectDB";
import Project, { type IProject } from "../models/Project";
import { redirect } from "next/navigation";

export interface ProjectUpdate extends IProject {
  _id?: string;
}

export const createProject = async (prevData: any, formData: FormData) =>{
  const service = Object.fromEntries(formData.entries()).project as string
  const finalService = JSON.parse(service) as ProjectUpdate;
  await connectToMongoDB();
  if (finalService._id) {
    await Project.findByIdAndUpdate(finalService._id, finalService, { new: true });
    revalidatePath('/admin/projects');
    revalidatePath('/experience');
    redirect('/admin/projects');
  }

  const project = new Project(finalService);
  await project.save();
  revalidatePath('/admin/projects');
  revalidatePath('/experience');
  redirect('/admin/projects');
};

export const getProject = async (id: string) => {
  await connectToMongoDB();
  const project = await Project.findById(id);
  return JSON.parse(JSON.stringify(project)) as ProjectUpdate;
};


export const deleteProject = async (id: string) => {
  await Project.findByIdAndDelete(id);
  revalidatePath('/admin/projects');
  revalidatePath('/experience');
  redirect('/admin/projects');
};

export const getProjects = async () => {
  await connectToMongoDB();
  const projects = await Project.find({}).lean();
  return projects.map((p: any) => ({ ...p, _id: p._id?.toString?.() }));
};
