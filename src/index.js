import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import {Link} from 'react-router-dom'
import MovieReviewPage from "./pages/movieReviewPage";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import UpcomingPage from "./pages/upcomingMovies";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import ActorsPage from './pages/actorsPage'
import ActorPage from "./pages/actorDetailsPage";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

// Dark Mode From
// https://mui.com/material-ui/customization/dark-mode/#dark-mode-by-default
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
            <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/movies/:id/similar" element={<SimilarMoviesPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/actors" element={<ActorsPage />} />
            <Route path="/actors/:id" element={<ActorPage />} />
            <Route path="*" element={ <Navigate to="/" /> } />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route path="movies/upcoming" element={ <UpcomingPage /> } />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </ThemeProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);