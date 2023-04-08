import data from '../MovieData.json';
import Layout from './Layout';

// shows all the movies in a table

const MovieDataMDS = data.MovieDataList;

function MovieList() {
  return (
    <>
      <div>
        <Layout />
        <div>
          <h3 className="text-center">Joel Hilton's Movie Collection</h3>
          <br></br>
        </div>
      </div>
      <div className="container text-center">
        <table className="table align-self-center">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {MovieDataMDS.map((m) => (
              <tr key={m.Title}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
