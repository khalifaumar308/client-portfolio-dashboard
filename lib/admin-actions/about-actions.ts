'use server';
import { revalidatePath } from "next/cache";
import about, { IAbout } from "../models/about";
import { connectToMongoDB } from "../models/connectDB";
import { redirect } from "next/navigation";

export interface AboutUpdate extends IAbout {
  _id?: string;
}

export const getAbout = async () => {
  connectToMongoDB();
  try {
    const aboutData = await about.findOne({});
    return JSON.parse(JSON.stringify(aboutData)) as IAbout;
  } catch (error) {
    throw new Error("Failed to fetch about data");
  }
};
export const updateAbout = async (data: AboutUpdate) => {
  connectToMongoDB();
  try {
    const found = await about.findOne({});
    if (!found) {
      const newAbout = new about(data);
      await newAbout.save();
      revalidatePath('/admin/about');
      revalidatePath('/about');
      redirect('/admin/about');
    }
    await about.findOneAndUpdate({}, data, { new: true });
  } catch (error) {
    console.log('about error', error)
    throw new Error("Failed to update about data");
  }
  revalidatePath('/admin/about');
  revalidatePath('/about');
  redirect('/admin/about');
};