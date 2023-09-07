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
  return (
    <button
      style={isLoading ? { cursor: "not-allowed" } : {}}
      className={
        "item-info-other-addToFavorites smart work-sans " +
        (isAddToFavorites ? "isAddToFavorites" : "")
      }
      onClick={toggleFavorites}
    >
      {isAddToFavorites ? "In Favorites" : "Add To Favorites"}
    </button>
  );
};
