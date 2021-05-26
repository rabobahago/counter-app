import Like from "./common/like";
const MoviesTable = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.rate}</td>
            <td>
              <Like
                onClick={() => props.handleClick(movie)}
                liked={movie.liked}
              />
            </td>
            <td>
              <button
                onClick={() => props.handleDelete(movie)}
                className="btn btn-danger btn-sm"
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
