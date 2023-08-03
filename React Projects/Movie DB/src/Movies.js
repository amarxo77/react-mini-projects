import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { isLoading, movies } = useGlobalContext();
  if (isLoading) return <div className='loading'></div>;
  if (movies)
    return (
      <section className='movies'>
        {movies.map((movie) => {
          const {
            Poster: poster,
            Title: title,
            Year: year,
            imdbID: id,
          } = movie;
          return (
            <Link to={`/movies/${id}`} key={id} className='movie'>
              <article>
                <img src={poster !== "N/A" ? poster : url} alt={title} />
                <div className='movie-info'>
                  <h4 className='title'>{title}</h4>
                  <p>{year}</p>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    );
};

export default Movies;
