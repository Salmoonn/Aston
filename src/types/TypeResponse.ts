export interface CollectionResponse {
  id: string;
  name: string;
  creator: string;
  body: ItemResponse[];
}

export interface ItemResponse {
  id: string;
  creator: string;
  name: string;
  price: number;
  highestBid: number;
  tags: string[] | null;
  collection: string[] | null;
  description: string | null;
}

export interface UserResponse {
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
  items: ItemResponse[] | null;
  collections: CollectionResponse[] | null;
  roles: string[];
}

export interface ProfileResponse extends UserResponse {
  favorites: ItemResponse[] | null;
  history: string[] | null;
}

export interface RefreshTokenResponse {
  accessToken: string;
}

export interface LoginResponse {
  accessToken?: string;
  isNotValidData?: true;
}

export interface ToggleFavoritesResponse {
  isAdd?: true;
  isDelete?: true;
}

export interface PostHistoryResponse {}

export interface SignupResponse {
  isNotValidLogin?: true;
  isNotValidEmail?: true;
  accessToken?: string;
}
