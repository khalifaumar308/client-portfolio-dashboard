export interface IService {
  _id: string;
  title: string;
  description: string;
  icon?: string;
  subtext: string;
  listItems: string[];
  featured: boolean;
  imageUrl?: string; // Optional field for image URL
  type: 'Regulation' | 'Business' | 'Legal';
}

export type INewService = Omit<IService, '_id'>;

export interface IHero {
  title: string;
  heading: string;
  imageUrl: string; // Optional field for image URL
  subText: string; // Optional field for subtext
  yearsOfExperience: number; // Optional field for years of experience
  clientsServed: number; // Optional field for clients served
  endorsements: number; // Optional field for endorsements
  partnerships: number; // Optional field for partnerships
  socialMediaLinks: {
    platform: string;
    url: string;
  }[]
}