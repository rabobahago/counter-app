import _ from "lodash";
const Pagination = ({ itemsCount, pageSize, onPageChange, onCurrentPage }) => {
  let pageCount = itemsCount / pageSize;
  pageCount = Math.ceil(pageCount);
  if (pageCount === 1) return null;
  let pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li
              className={
                page === onCurrentPage ? "page-item active" : "page-item"
              }
              key={page}
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Pagination;
