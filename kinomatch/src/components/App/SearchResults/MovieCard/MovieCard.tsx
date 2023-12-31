// ================ IMPORT BIBLIOTHEQUES ================

import { Link } from 'react-router-dom';
import React from 'react';
import { useSpring, animated } from 'react-spring';

// ================ INTERFACES================
interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: number;
    release_date: string;
    vote_count: number;
  };
  circle: {
    id: number;
    fillValue: number;
  };
}
//* ================ COMPOSANT ================

const MovieCard: React.FC<MovieCardProps> = ({ movie, circle }) => {
  // ================ UTILS ================

  // CONVERSION DATE

  function formatDate(dateString: string | number | Date) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}/${
      month < 10 ? '0' + month : month
    }/${year}`;
  }

  // FONCTION DE REMPLISSAGE ANIMATION

  const circleAnimation = useSpring({
    from: { strokeDashoffset: 326.56 },
    to: { strokeDashoffset: 326.56 - (326.56 * circle.fillValue) / 100 },
  });

  // ================ JSX ================

  return (
    <article className='searchresults-container-cardlist-card'>
      <div className='searchresults-container-cardlist-card__imagecontainer'>
        {/* Lien vers la page du film */}
        <Link to={`/films?filmID=${movie.id}`}>
          <img
            className='searchresults-container-cardlist-card__imagecontainer__image'
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`
                : '/images/testsample.jpg'
            }
            alt={movie.title + ' affiche'}
          />
        </Link>
      </div>
      <section className='searchresults-container-cardlist-card__infos'>
        <div className='searchresults-container-cardlist-card__infos__content'>
          <div className='searchresults-container-cardlist-card__infos__titlereleasecircle'>
            <div className='searchresults-container-cardlist-card__infos__titlereleasecircle__titlerelease'>
              {/* Titre du film */}
              <h3 className='searchresults-container-cardlist-card__infos__title'>
                <Link to={`/films?filmID=${movie.id}`}>{movie.title}</Link>
              </h3>
              <div className='searchresults-container-cardlist-card__infos__release'>
                {/* Date de sortie */}
                <span>
                  Date de sortie :{' '}
                  {movie.release_date
                    ? formatDate(movie.release_date)
                    : 'Non précisée'}
                </span>
              </div>
            </div>
            <div className='circle-big'>
              <div className='text'>
                {/* Note du film */}
                {Math.floor(movie.vote_average * 10) === movie.vote_average * 10
                  ? movie.vote_average * 10
                  : (movie.vote_average * 10).toFixed(1)}
                %<div className='small'>{movie.vote_count} votes </div>
              </div>
              <svg>
                <circle className='bg' cx='57' cy='57' r='52' />
                {/* Cercle de progression de la note */}
                <animated.circle
                  className='progress'
                  cx='57'
                  cy='57'
                  r='52'
                  style={circleAnimation}
                  aria-label={`Note : ${movie.vote_average * 10}%`}
                />
              </svg>
            </div>
          </div>
          {/* Description du film */}
          <p className='searchresults-container-cardlist-card__infos__desc'>
            {movie.overview}
          </p>
        </div>
      </section>
      <hr />
    </article>
  );
  //* ================ FERMTURE COMPOSANT ================
};

export default MovieCard;
