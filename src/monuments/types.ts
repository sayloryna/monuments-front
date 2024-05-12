export interface Monument {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  country: string;
  city: string;
}

export interface Monuments {
  monuments: Monument[];
}
