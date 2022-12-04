import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { ActorsContext } from "../../contexts/actorsContext";

const RemoveFromFavouriteActorsIcon = ({ actor }) => {
  const context = useContext(ActorsContext);

  const handleRemoveFromFavouriteActors = (e) => {
    e.preventDefault();
    context.removeFromFavouriteActors(actor);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromFavouriteActors}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromFavouriteActorsIcon;
