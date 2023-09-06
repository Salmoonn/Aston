import "./Favorites.css";

import { Card } from "../../components/Card";
import { useGetFavorites } from "../../hooks/useGetFavorites";

export const Favorites = (): JSX.Element => {
  const favoritesItems = useGetFavorites();

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
