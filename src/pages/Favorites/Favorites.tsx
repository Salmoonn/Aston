import "./Favorites.css";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { Item } from "../../types/Item";
import api from "../../api";
import { is } from "immer/dist/internal";

const Favorites = (): JSX.Element => {
  const navigate = useNavigate();

  const favorites = useSelector(
    (state: RootState) => state.auth.profileData.profile?.favorites
  );

  // const accessToken = useSelector(
  //   (state: RootState) => state.auth.authData.accessToken
  // );

  // useEffect(() => {
  //   // if (!accessToken) navigate("/login");
  // }, []);

  const [favoritesItem, setFavoritesItem] = useState<Item[] | null>(null);

  useEffect(() => {
    if (favorites)
      api.favorites
        .getFavorites(favorites)
        .then((res) => setFavoritesItem(res.data));
  }, [favorites]);

  useEffect(() => {
    if (!favorites) navigate("/login");
  }, []);

  return (
    <div className="favorites wrapper column">
      <div className="favorites-headline work-sans">Favorites</div>
      <div className="favorites-body">
        {favoritesItem
          ? favoritesItem.map((e) => <Card item={e} />)
          : "No favorites"}
      </div>
    </div>
  );
};

export default Favorites;
