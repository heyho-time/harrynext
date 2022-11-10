import { useState, useEffect } from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import Seo from '../components/Seo';

export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);

  const { container, movieImg, h4 } = styles;

  return (
    <div className={container}>
      <Seo title={'Home'} />

      {!movies && <h4>Loading...</h4>}

      {movies?.map((movie) => (
        <div key={movie.id}>
          <img
            className={movieImg}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          <h4 className={h4}>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
