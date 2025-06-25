import mongoose from 'mongoose'
export interface ICapability {
  title: string;
  percentage: number;
}

const CapabilitySchema = new mongoose.Schema<ICapability>({
  title: { type: String, required: true },
  percentage: { type: Number, required: true }
});

export default mongoose.models.Capability || mongoose.model<ICapability>('Capability', CapabilitySchema);