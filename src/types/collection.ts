import { Item } from "./Item";

export interface ICollection {
  id: string;
  name: string;
  creator: string;
  body: Item[];
}
