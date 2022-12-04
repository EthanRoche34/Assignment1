import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import { Link } from "react-router-dom";
import MovieReviewPage from "./pages/movieReviewPage";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import UpcomingPage from "./pages/upcomingMovies";
import TopMoviesPage from "./pages/topMoviesPage";
import SiteHeader from "./components/siteHeader";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
//import ActorsContextProvider from "./contexts/actorsContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import ActorsPage from "./pages/actorsPage";
import ActorPage from "./pages/actorDetailsPage";
import FavouriteActorsPage from "./pages/favouriteActorsPage"; // NEW
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MustWatchPage from "./pages/mustWatchPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

// Dark Mode From
// https://mui.com/material-ui/customization/dark-mode/#dark-mode-by-default
const darkTheme = createTheme({
  palette: {
    mode: "dark",
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
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              <Route
                exact
                path="/movies/favourites"
                element={<FavouriteMoviesPage />}
              />
              <Route
                exact
                path="/actors/favourites"
                element={<FavouriteActorsPage />}
              />
              <Route
                exact
                path="/movies/mustWatch"
                element={<MustWatchPage />}
              />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route
                path="/movies/:id/similar"
                element={<SimilarMoviesPage />}
              />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route path="movies/upcoming" element={<UpcomingPage />} />
              <Route path="movies/top" element={<TopMoviesPage />} />
              <Route path="/actors" element={<ActorsPage />} />
              <Route path="/actors/:id" element={<ActorPage />} />
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
