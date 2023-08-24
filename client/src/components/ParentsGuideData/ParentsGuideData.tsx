import "./ParentsGuideData.css";
import { useState, useEffect } from "react";
import { LoadingType } from "../../types/loading.models";
import { MovieID, MovieTitle } from "../../types/movies.model";

interface ParentsDataObj {
  movieID: MovieID;
  movieTitle: MovieTitle;
  setIsLoading: (event: LoadingType) => void;
}

export const ParentsGuideData: React.FC<ParentsDataObj> = ({
  movieID,
  movieTitle,
  setIsLoading,
}) => {
  const [data, setData] = useState([]);
  const [visibleParagraphs, setVisibleParagraphs] = useState<String[]>([]);

  const toggleParagraphVisibility = (id: MovieID) => {
    if (visibleParagraphs.includes(id)) {
      setVisibleParagraphs(visibleParagraphs.filter((i) => i !== id));
    } else {
      setVisibleParagraphs([...visibleParagraphs, id]);
    }
  };

  const getParentsGuide = async (id: MovieID) => {
    setIsLoading(true);
    try {
      let response = await fetch(
        `http://localhost:8000/get-parents-guide-by-id/${id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setData(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    movieID && getParentsGuide(movieID);
  }, [movieID]);

  return (
    <div className="parents-guide-data box">
      <h2>{movieTitle}</h2>
      {data.length !== 0 ? (
        Object.entries(data).map(([key, value], index = 10) => (
          <div className="category" key={index}>
            <span>
              <strong
                onClick={() => toggleParagraphVisibility(index.toString())}
              >
                {key}
              </strong>
            </span>
            {visibleParagraphs.includes(index.toString()) && <p>{value}</p>}
          </div>
        ))
      ) : (
        <h1>no data</h1>
      )}
    </div>
  );
};
