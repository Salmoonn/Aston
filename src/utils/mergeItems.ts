import { ICollection } from "../types/collection";
import { Item } from "../types/Item";

export const mergeItems = (
  items: Item[] | null,
  collections: ICollection[] | null
): Item[] | null => {
  if (collections) {
    const newItems = collections.map((e) => e.body).flat();
    if (items) {
      return [...items, ...newItems];
    } else {
      return [...newItems];
    }
  } else if (items) {
    return [...items];
  }

  return null;
};
