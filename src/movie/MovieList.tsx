import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';

//This function is for pulling in the data from the API on the backend

function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <div className="row">
        <h4>The Best Movies in History</h4>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Director</th>
            </tr>
          </thead>
          <tbody>
            {movieData.map((m) => (
              <tr>Hey</tr>
              // <tr key={m.Title}>
              //     <td>{m.Director}</td>
              // </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
