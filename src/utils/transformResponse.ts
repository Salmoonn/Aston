import {
  CollectionResponse,
  ItemResponse,
  ProfileResponse,
  UserResponse,
} from "../types/TypeResponse";
import { Collection, Item, Profile, User } from "../types/Types";

export const transformCollection = (
  collection: CollectionResponse
): Collection => collection;

export const transformItem = (item: ItemResponse): Item => item;

export const transformUser = (user: UserResponse): User => user;

export const transformProfile = (profile: ProfileResponse): Profile => profile;
