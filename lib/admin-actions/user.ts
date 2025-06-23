import User from "../models/User";
import { connectToMongoDB } from '../models/connectDB'


export const getUser = async(email: string) => {
  if (!email) {
    return false
  }
  await connectToMongoDB()
  const user = await User.find({ email })
  console.log(user, 'user')
  if (user.length > 0) {
    return true
  }
  return false
}