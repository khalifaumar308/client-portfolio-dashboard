import mongoose from "mongoose";

export interface IProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const ProjectSchema = new mongoose.Schema<IProject>({
  title: String,
  description: String,
  image: String,
  tags: [String],
})

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema)