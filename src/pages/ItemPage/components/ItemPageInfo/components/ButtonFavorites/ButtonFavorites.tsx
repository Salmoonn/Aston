import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../../../../store";

interface ButtonFavoritesProps {
  isAddToFavorites: boolean;
  toggleFavorites: () => void;
}

const ButtonFavorites = ({
  isAddToFavorites,
  toggleFavorites,
}: ButtonFavoritesProps): JSX.Element => {
  const navigate = useNavigate();

  const isLoggedIn = useSelector(
    (state: RootState) => !!state.auth.accessToken
  );

  const handleClick = () => {
    if (isLoggedIn) toggleFavorites();
    else navigate("/login");
  };

  return (
    <button
      className={
        "item-info-other-addToFavorites smart work-sans " +
        (isAddToFavorites ? "isAddToFavorites" : "")
      }
      onClick={handleClick}
    >
      {isAddToFavorites ? "In Favorites" : "Add To Favorites"}
    </button>
  );
};

export default ButtonFavorites;
