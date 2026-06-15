export interface LocalizedString {
  ua: string;
  en: string;
  ru: string;
  pl: string;
}

export interface ServiceSubCategory {
  id: string;
  title: LocalizedString;
  description?: LocalizedString;
  price?: number;
}

export interface MedicalService {
  id: string;
  number: string;
  title: LocalizedString;
  shortDescription: LocalizedString;
  icon?: string;
  subCategories: ServiceSubCategory[];
}
