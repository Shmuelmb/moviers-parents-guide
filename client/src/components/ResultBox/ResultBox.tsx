import React from "react";
import ResultItem from "./ResultItem/ResultItem";
import "./ResultBox.css";
import { MovieID, MoviesListTypes } from "../../types/movies.model";

interface ResultBoxObj {
  moviesList: MoviesListTypes[];
  setChoosenMovieId: (event: MovieID) => void;
  setMovieTitle: (event: String) => void;
}

const ResultBox: React.FC<ResultBoxObj> = ({
  moviesList,
  setChoosenMovieId,
  setMovieTitle,
}) => {
  return (
    <div className="box">
      <ul>
        {moviesList.map((x, index) => {
          return (
            <ResultItem
              key={index + 10}
              title={x.title}
              movieID={x.id}
              setChoosenMovieId={setChoosenMovieId}
              setMovieTitle={setMovieTitle}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ResultBox;
