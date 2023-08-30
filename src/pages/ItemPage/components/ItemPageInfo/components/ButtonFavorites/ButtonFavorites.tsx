interface ButtonFavoritesProps {
  isAddToFavorites: boolean;
  addToFavorites: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonFavorites = ({
  isAddToFavorites,
  addToFavorites,
}: ButtonFavoritesProps): JSX.Element => {
  return (
    <button
      className={
        "item-info-other-addToFavorites smart work-sans " +
        (isAddToFavorites ? "isAddToFavorites" : "")
      }
      onClick={addToFavorites}
    >
      {isAddToFavorites ? "In Favorites" : "Add To Favorites"}
    </button>
  );
};

export default ButtonFavorites;
