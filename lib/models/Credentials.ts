import mongoose from 'mongoose'

export interface ICredentials {
  type: 'Education' | 'Certification';
  title: string;
  issuer: string;
  period: string;
  details: string;
}

const CreadentialsSchema = new mongoose.Schema<ICredentials>({
  type: { type: String, enum: ['Education', 'Certification'], default: 'Education' },
  title: String,
  issuer: String,
  period: String,
  details: String
})

export default mongoose.models.Credentials || mongoose.model('Credentials', CreadentialsSchema)
