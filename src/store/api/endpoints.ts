const Endpoints = {
  IMAGE: {
    IMG_ID: "/i/",
    AVATAR_ID: "/a/",
    BANNER_ID: "/b/",
  },
  COLLECTION: {
    TOP_COLLECTION: "/topcollections",
    GET_COLLECTION: "/c/",
  },
  AUTH: {
    SIGNUP: "/signup",
    LOGIN: "/login",
    PROFILE: "/profile",
    REFRESH: "/refresh",
    LOGOUT: "/logout",
  },
  USER: {
    GET_USER: "/user",
    GET_TOP_USERS: "/topusers",
  },
  ITEM: {
    GET_ITEM: "/item",
    GET_MORE_ITEMS: "/moreitems",
  },
  SEARCH: {
    SEARCH_ITEM: "/searchitem",
    SEARCH_COLLECTION: "/searchcollection",
  },
  FAVORITES: {
    TOGGLE_FAVORITES: "/togglefavorites",
    GET_FAVORITES: "/getfavorites",
  },
  HISTORY: {
    POST_HISTORY: "/posthistory",
    DELETE_HISTORY: "deletehistory",
  },
};

export default Endpoints;
