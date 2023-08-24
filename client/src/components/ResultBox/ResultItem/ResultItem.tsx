import React from "react";
import { MovieID, MovieTitle } from "../../../types/movies.model";

interface ResultItemTypes {
  title: MovieTitle;
  movieID: MovieID;
  setChoosenMovieId: (event: String) => void;
  setMovieTitle: (event: String) => void;
}
const ResultItem: React.FC<ResultItemTypes> = ({
  title,
  movieID,
  setChoosenMovieId,
  setMovieTitle,
}) => {
  return (
    <li
      onClick={() => {
        setChoosenMovieId(movieID.toString());
        setMovieTitle(title);
      }}
      key={Number(movieID)}
    >
      {title}
    </li>
  );
};

export default ResultItem;
