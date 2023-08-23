import { Item } from "../types/Item";
import { ICollection } from "../types/collection";

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
  collections: ICollection[] | null;
  roles: string[];
}
