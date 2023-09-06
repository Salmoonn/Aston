import { useNavigate } from "react-router-dom";
import { useIsLoggedIn } from "../../../../../../hooks/useIsLoggedIn";

interface Props {
  isAddToFavorites: boolean;
  toggleFavorites: () => void;
  isLoading: boolean;
}

export const ButtonFavorites = ({
  isAddToFavorites,
  toggleFavorites,
  isLoading,
}: Props): JSX.Element => {
  const navigate = useNavigate();

  const isLoggedIn = useIsLoggedIn();

  const handleClick = (): void => {
    if (isLoggedIn) {
      toggleFavorites();
    } else {
      navigate("/login");
    }
  };

  return (
    <button
      style={isLoading ? { cursor: "not-allowed" } : {}}
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
