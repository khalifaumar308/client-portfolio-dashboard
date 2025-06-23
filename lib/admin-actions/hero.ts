'use server'
import { IHero } from '@/components/types'
import { connectToMongoDB } from '../models/connectDB'
import Hero from '../models/Hero'
import { revalidatePath } from 'next/cache'


export async function getHero() {
  await connectToMongoDB()
  const hero = await Hero.find().lean()
  if (!hero || hero.length === 0) {
    // If no hero exists, create a default one
    const defaultHero: IHero = {
      title: 'Default Hero',
      imageUrl: '/default-hero.jpg',
      subText: 'This is a default hero description.',
      yearsOfExperience: 0,
      clientsServed: 0,
      endorsements: 0,
      partnerships: 0,
      socialMediaLinks: [],
      heading: 'Welcome to Our Service',
    }
    const newHero = new Hero(defaultHero)
    await newHero.save()
    return defaultHero
  }
  // If a hero exists, return the first one
  return JSON.parse(JSON.stringify(hero[0])) as IHero
}


export async function createHero(prevData: any, formData: FormData) {
  const hero = Object.fromEntries(formData.entries()).hero as string
  const finalHero = JSON.parse(hero) as IHero & { _id?: string }
  await connectToMongoDB()
  
  if (finalHero._id) {
    // If _id exists, update the hero
    const existingHero = await Hero.findById(finalHero._id).lean()
    if (!existingHero) {
      return { error: `Hero with id ${finalHero._id} not found` }
    }
    await Hero.findByIdAndUpdate(finalHero._id, finalHero, { new: true })
    revalidatePath('/admin/hero')
    return 'done'
  }
  const newHero = new Hero(finalHero)
  await newHero.save()
  revalidatePath('/admin/hero')
  return 'done'
}
