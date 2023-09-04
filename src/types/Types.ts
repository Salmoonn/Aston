export interface Collection {
  id: string;
  name: string;
  creator: string;
  body: Item[];
}

export interface Item {
  id: string;
  creator: string;
  name: string;
  price: number;
  highestBid: number;
  tags: string[] | null;
  collection: string[] | null;
  description: string | null;
  minted: number;
}

export interface User {
  login: string;
  email: string;
  name: string;
  totalSale: number;
  volume: number;
  sold: number;
  followers: number;
  bio: string | null;
  link: {
    globe: string | null;
    discord: string | null;
    youtube: string | null;
    twitter: string | null;
    instagram: string | null;
  };
  items: Item[] | null;
  collections: Collection[] | null;
  roles: string[];
}

export interface Profile extends User {
  favorites: Item[] | null;
  history: string[] | null;
}
