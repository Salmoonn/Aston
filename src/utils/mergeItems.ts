import type { Collection } from "../types/Types";
import type { Item } from "../types/Types";

export const mergeItems = (
  items: Item[] | null,
  collections: Collection[] | null,
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
