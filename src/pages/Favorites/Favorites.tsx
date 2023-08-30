import "./Favorites.css";

import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { Item } from "../../types/Item";
import api from "../../api";

const Favorites = (): JSX.Element => {
  const favoritesList = useSelector(
    (state: RootState) => state.auth.profileData.profile?.favorites
  );

  const [favoritesItems, setFavoritesItems] = useState<Item[] | null>(null);

  useEffect(() => {
    if (favoritesList)
      api.favorites
        .getFavorites(favoritesList)
        .then((res) => setFavoritesItems(res.data));
  }, [favoritesList]);

  return (
    <div className="favorites wrapper column">
      <div className="favorites-headline work-sans">Favorites</div>
      <div className="favorites-body">
        {favoritesItems
          ? favoritesItems.map((e) => <Card key={e.id} item={e} />)
          : "No favorites"}
      </div>
    </div>
  );
};

export default Favorites;
