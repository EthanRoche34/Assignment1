import React, { useContext } from "react";
import ActorsTemplate from "../components/templateActorListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavouriteActors";
import WriteReview from "../components/cardIcons/writeReview";

const FavouriteActorsPage = () => {
  const { favouriteActors: actorIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const favouriteActorQueries = useQueries(
    actorIds.map((actorId) => {
      return {
        queryKey: ["actor", { id: actorId }],
        queryFn: getActor,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteActorQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const actors = favouriteActorQueries.map((q) => {
    return q.data;
  });

  const toDo = () => true;

  return (
    <ActorsTemplate
      title="Favourite Actors"
      actors={actors}
      action={(actor) => {
        return (
          <>
            <RemoveFromFavourites actor={actor} />
          </>
        );
      }}
    />
  );
};

export default FavouriteActorsPage;
