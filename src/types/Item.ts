export interface Item {
  id: string;
  creator: string;
  name: string;
  price: number;
  highestBid: number;
  tags: string[] | null;
  collection: string[] | null;
}
