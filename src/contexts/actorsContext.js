import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
  const [favouriteActors, setFavouriteActors] = useState([]);

  const addToFavouriteActors = (actor) => {
    let newFavourites = [...favouriteActors];
    if (!favouriteActors.includes(actor.id)) {
      newFavourites.push(actor.id);
    }
    setFavouriteActors(newFavourites);
  };

  const removeFromFavouriteActors = (actor) => {
    setFavouriteActors(favouriteActors.filter((mId) => mId !== actor.id));
  };

  return (
    <ActorsContext.Provider
      value={{
        favouriteActors,
        addToFavouriteActors,
        removeFromFavouriteActors,
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;
