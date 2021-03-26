import { useState } from 'react';
import Movie from './Movie';
import {getMovies} from '../movieService'


const Movies = () => {

    const [movies, setMovies] = useState([]);
    
    const buttonclicked = async() =>{
      const data = await getMovies();
      setMovies(data);
    };
  
  return (
    <div>
      <ul>
        {movies?.length > 0 && 
          movies.map((movie) => (
            <Movie key={movie._id} title={movie.title} actor={movie.actor}/>
            )
          )
        }
      </ul>
      <button type="button" onClick={buttonclicked}>Filmer</button>
    </div>
  );
};

export default Movies;