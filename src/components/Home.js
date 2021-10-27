import React from "react";

//Config
import {
  POPULAR_BASE_URL,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  POSTER_SIZE,
} from "../config";
//Components
import HeroImage from "./Heroimages";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spiner from "./Spiner";
import SearchBar from "./SearchBar";
import Button from "./Button";

//Hook
import { useMovieFetch } from "../hooks/useHomeFetch";

// Image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore } =
    useMovieFetch();

  // console.log(state);

  if(error) return <div>Someting went wrong ...</div>

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTeam={setSearchTerm} />
      <Grid header={searchTerm ? "Search Result" : "Popolar Movies"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spiner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
