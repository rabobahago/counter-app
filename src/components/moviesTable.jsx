import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre " },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" },
  ];
  render() {
    const { movies, handleClick, handleDelete, onSort, sortColumn } =
      this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
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
  }
}

export default MoviesTable;
