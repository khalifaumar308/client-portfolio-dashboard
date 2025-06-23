import mongoose from 'mongoose'

interface INewService extends mongoose.Document {
  title: string;
  description: string;
  icon?: string;
  subtext: string;
  listItems: string[];
  featured: boolean;
  imageUrl?: string; // Optional field for image URL
  type: 'Regulation' | 'Business'| 'Legal'; // Optional field for service type
}

const ServiceSchema = new mongoose.Schema<INewService>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String },
  subtext: { type: String, required: true },
  listItems: { type: [String], required: true },
  featured: { type: Boolean, required: true },
  imageUrl: { type: String }, // Optional field for image URL
  type: { type: String, enum: ['Regulation', 'Business', 'Legal'], default: 'Business' } // Optional field for service type
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

export default mongoose.models.Service || mongoose.model<INewService>('Service', ServiceSchema)
