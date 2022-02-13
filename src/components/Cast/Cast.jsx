import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/tmdbApi';
import { BASE_URL_IMG } from 'services/tmdbApi';
import defaultImg from 'images/default_img.png';
import { Wrapper } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const movieCredits = await getCast(movieId);
        setCast(movieCredits.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      {cast && (
        <Wrapper>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                src={
                  profile_path ? `${BASE_URL_IMG}/${profile_path}` : defaultImg
                }
                alt={name}
              />
              <p>{name}</p>
              <p>
                <span>Character:</span> {character}
              </p>
            </li>
          ))}
        </Wrapper>
      )}
    </>
  );
};

export default Cast;
