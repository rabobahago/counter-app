import _ from "lodash";
const Pagination = ({ itemsCount, pageSize }) => {
  let pagesCount = itemsCount / pageSize;
  pagesCount = Math.ceil(pagesCount);
  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li className="page-item">
              <a className="page-link">{page}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Pagination;
