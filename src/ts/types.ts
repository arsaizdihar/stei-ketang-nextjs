export interface UserType {
  id: number;
  email: string;
  full_name: string;
  vote?: {
    id: number;
    number: number;
    name: string;
    time: string;
    photo: string;
  };
}

export interface Detail {
  number: number;
  text: string;
}

export interface Candidate {
  number: number;
  photo: string;
  name: string;
  bio: string;
  detail: {
    visi: Detail[];
    misi: Detail[];
    program: Detail[];
  };
  instagram?: string;
  linkedin?: string;
  twitter?: string;
}
