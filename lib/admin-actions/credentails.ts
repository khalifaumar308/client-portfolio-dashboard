"use server";

import { revalidatePath } from "next/cache";
import Credentials, { ICredentials } from "../models/Credentials";
import { connectToMongoDB } from "../models/connectDB";
import { redirect } from "next/navigation";

interface CredentailsUpdate extends ICredentials {
  _id?: string;
}

export const getCredentails = async () => {
  await connectToMongoDB();
  const [education, certification] = await Promise.all([
    Credentials.find({ type: "Education" }),
    Credentials.find({ type: "Certification" }),
  ]);
  return {
    education: JSON.parse(JSON.stringify(education)) as CredentailsUpdate,
    certification: JSON.parse(
      JSON.stringify(certification)
    ) as CredentailsUpdate,
  };
};

export const createCredential = async (prevState: any, formData: FormData) => {
  await connectToMongoDB()
  const cred = Object.fromEntries(formData.entries()).credentials as string
  const credential = JSON.parse(cred) as CredentailsUpdate

  if (credential._id) {
    await Credentials.findByIdAndUpdate(credential._id, { ...credential })
    revalidatePath('/admin/credentials')
    revalidatePath('/')
    redirect('/admin/credentials')
  }
  await Credentials.create({ ...credential })
  revalidatePath('/admin/credentials')
  revalidatePath('/experience')
  redirect('/admin/credentials')
}

export const getCredentailById = async (id: string) => {
  await connectToMongoDB();
  const credentail = await Credentials.findById(id)
  return JSON.parse(JSON.stringify(credentail)) as CredentailsUpdate
}

export const deleteCredential = async (id: string) => {
  await connectToMongoDB()
  await Credentials.findByIdAndDelete(id)
  revalidatePath('/admin/credentials')
  revalidatePath('/experience')
  redirect('/admin/credentials')
}
