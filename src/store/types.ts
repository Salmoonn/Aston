export interface Item {
  id: string;
  creator: string;
  name: string;
  price: number;
  highestBid: number;
  tags: string[] | null;
  collection: string[] | null;
}

export interface Collection {
  id: string;
  name: string;
  creator: string;
  body: Item[];
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
    globe: null;
    discord: null;
    youtube: null;
    twitter: null;
    instagram: null;
  };
  items: Item[] | null;
  collections: Collection[] | null;
  roles: string[];
}
