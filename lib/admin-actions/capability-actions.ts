'use server';
import { revalidatePath } from "next/cache";
import Capability, { type ICapability } from "../models/Capability";
import { redirect } from "next/navigation";
import { connectToMongoDB } from "../models/connectDB";

export interface CapabilityUpdate extends ICapability {
  _id?: string;
}

export const createCapability = async (prevData: any, formData: FormData) => {
  const service = Object.fromEntries(formData.entries()).capability as string;
  const finalService = JSON.parse(service) as CapabilityUpdate;

  await connectToMongoDB();
  if (finalService._id) {
    await Capability.findByIdAndUpdate(finalService._id, finalService, { new: true });
    revalidatePath('/admin/capabilities');
    revalidatePath('/experience');
  }

  const capability = new Capability(finalService);
  await capability.save();
  revalidatePath('/admin/capabilities');
  revalidatePath('/experience');
};

export const getCapability = async (id: string) => {
  await connectToMongoDB();
  const capability = await Capability.findById(id);
  return JSON.parse(JSON.stringify(capability)) as CapabilityUpdate;
};

export const getCapabilities = async () => {
  await connectToMongoDB();
  const capability = await Capability.find();
  return JSON.parse(JSON.stringify(capability)) as CapabilityUpdate[];
};

export const deleteCapability = async (id: string) => {
  await Capability.findByIdAndDelete(id);

  revalidatePath('/admin/capabilities');
  revalidatePath('/experience');
};