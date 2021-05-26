import Like from "./common/like";
const MoviesTable = (props) => {
  const { onSort, movies, handleClick, handleDelete } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>Title</th>
          <th onClick={() => onSort("genre.name")}>Genre</th>
          <th onClick={() => onSort("numberInStock")}>Stock</th>
          <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.rate}</td>
            <td>
              <Like onClick={() => handleClick(movie)} liked={movie.liked} />
            </td>
            <td>
              <button
                onClick={() => handleDelete(movie)}
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
