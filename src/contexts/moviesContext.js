import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState({});
  const [favourites, setFavourites] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);
  const [favouriteActors, setFavouriteActors] = useState([]);

  const addToFavourites = (movie) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      newFavourites.push(movie.id);
    }
    setFavourites(newFavourites);
  };

  const addToMustWatch = (movie) => {
    let newMustWatch = [...mustWatch];
    if (!mustWatch.includes(movie.id)) {
      newMustWatch.push(movie.id);
    }
    setMustWatch(newMustWatch);
    console.log(newMustWatch);
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const removeFromMustWatch = (movie) => {
    setMustWatch(mustWatch.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

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
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        mustWatch,
        addToMustWatch,
        removeFromMustWatch,
        addReview,
        favouriteActors,
        addToFavouriteActors,
        removeFromFavouriteActors,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
