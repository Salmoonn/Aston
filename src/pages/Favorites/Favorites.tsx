import "./Favorites.css";

import { Card } from "../../components/Card";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const Favorites = (): JSX.Element => {
  const favoritesItems = useSelector(
    (state: RootState) => state.auth.profile?.favorites
  );

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
