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
  SIGN_UP: "/signup",
  AUTH: {
    LOGIN: "/login",
    PROFILE: "/profile",
    REFRESH: "/refresh",
    LOGOUT: "/logout",
  },
  PROFILE: {
    GET_PROFILE: "/getprofile",
  },
  ITEM: {
    GET_ITEM: "/item",
  },
  SEARCH: {
    SEARCH_ITEM: "/searchitem",
    SEARCH_COLLECTION: "/searchcollection",
  },
  FAVORITES: {
    TOGGLE_FAVORITES: "/favorites",
    GET_FAVORITES: "/getfavorites",
  },
  HISTORY: {
    POST_HISTORY: "/posthistory",
  },
};

export default Endpoints;
