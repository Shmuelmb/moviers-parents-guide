import React, { useRef } from "react";
import { MoviesListTypes } from "../../types/movies.model";
import { LoadingType } from "../../types/loading.models";

interface SearchMovieTypes {
  setMoviesList: React.Dispatch<React.SetStateAction<MoviesListTypes[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<LoadingType>>;
}

const SearchMovie: React.FC<SearchMovieTypes> = ({
  setMoviesList,
  setIsLoading,
}) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const getMovie = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const searchContent = textInputRef.current?.value;
    try {
      let response = await fetch(
        `http://localhost:8000/search-movie/${searchContent}`,
        {
          method: "GET",
        }
      );
      const { result } = await response.json();
      setMoviesList(result);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={getMovie}>
      <div>
        <label htmlFor="search-movie">Search Movie</label>
        <input type="text" id="search-movie" ref={textInputRef} />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchMovie;
