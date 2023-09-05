import type {
  CollectionResponse,
  ItemResponse,
  ProfileResponse,
  UserResponse,
} from "../types/TypeResponse";
import type { Collection, Item, Profile, User } from "../types/Types";

export const transformCollection = (
  collection: CollectionResponse,
): Collection => collection;
export const transformCollections = (
  collections: CollectionResponse[],
): Collection[] => collections.map(transformCollection);

export const transformItem = (item: ItemResponse): Item => item;
export const transformItems = (items: ItemResponse[]): Item[] =>
  items.map(transformItem);

export const transformUser = (user: UserResponse): User => user;

export const transformProfile = (profile: ProfileResponse): Profile => profile;
