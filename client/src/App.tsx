import "./App.css";
import { useState } from "react";
import ResultBox from "./components/ResultBox/ResultBox";
import { ParentsGuideData } from "./components/ParentsGuideData/ParentsGuideData";
import SearchMovie from "./components/SearchMovie/SearchMovie";
import Loading from "./components/Loading/Loading";
import { MoviesListTypes, MovieID, MovieTitle } from "./types/movies.model";
import { LoadingType } from "./types/loading.models";

const App: React.FC = () => {
  const [moviesList, setMoviesList] = useState<MoviesListTypes[]>([
    { title: "s", id: "1" },
  ]);
  const [choosenMovieId, setChoosenMovieId] = useState<MovieID>("");
  const [movieTitle, setMovieTitle] = useState<MovieTitle>(
    "please choose movie"
  );
  const [isLoading, setIsLoading] = useState<LoadingType>(false);

  return (
    <>
      <SearchMovie setMoviesList={setMoviesList} setIsLoading={setIsLoading} />
      <div className="b">
        <ResultBox
          moviesList={moviesList}
          setChoosenMovieId={setChoosenMovieId}
          setMovieTitle={setMovieTitle}
        />
        <ParentsGuideData
          movieID={choosenMovieId}
          movieTitle={movieTitle}
          setIsLoading={setIsLoading}
        />
        <Loading isLoading={isLoading} />
      </div>
    </>
  );
};

export default App;
