import mongoose from "mongoose";

export interface IAbout {
  story: string[];
  quate: string;
  beyondWork: string;
  talk: string;
  philosophy: {
    title: string;
    description: string;
    icon: string;
  }[]
}

const AboutSchema = new mongoose.Schema<IAbout>({
  story: { type: [String], required: true },
  quate: { type: String, required: true },
  beyondWork: { type: String, required: true },
  talk: { type: String, required: true },
  philosophy: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      icon: { type: String, required: true }
    }
  ]
});
export default mongoose.models?.About || mongoose.model<IAbout>('About', AboutSchema);