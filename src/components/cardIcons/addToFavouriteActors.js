import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavouriteActorsIcon = ({ actor }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavouriteActors = (e) => {
    e.preventDefault();
    context.addToFavouriteActors(actor);
  };

  return (
    <IconButton
      aria-label="add to favorites"
      onClick={handleAddToFavouriteActors}
    >
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouriteActorsIcon;
