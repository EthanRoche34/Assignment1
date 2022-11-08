import React from "react";
import { useParams } from 'react-router-dom';
import PageTemplate from "../components/templateMovieListPage";
import useMovie from "../hooks/useMovie";
import { getMovie, getSimilarMovies } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch'


const SimilarMoviesPage = (props) => {
  const { id } = useParams();

  const { data, error, isLoading, isError } = useQuery(
    ["discover", { id: id }],
    getSimilarMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const mustWatch = movies.filter(m => m.mustWatch)
  localStorage.setItem('playlist', JSON.stringify(mustWatch))
  const addToMustWatch = (movieId) => true 

  return (
    <PageTemplate
      title="Similar Movies"
      movies={movies}
      action={(movie) => {
        return <AddToMustWatchIcon movie={movie} />
      }}
    />
);

};

export default SimilarMoviesPage;