export interface User {
  login: string;
  email: string;
  name: string;
  totalSale: number;
  collection: string[] | null;
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
  item: string[] | null;
  roles: string[];
}
