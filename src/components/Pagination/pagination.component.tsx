import './pagination.style.scss';

interface IProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (number: number) => void;
}

const Pagination: React.FC<IProps> = ({ postsPerPage, totalPosts, paginate }: IProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination">
      <ul className="pagination__pages">
        {pageNumbers.map((number, index) => {
          return (
            <li key={number} className="page-item">
              <a
                onClick={() => {
                  paginate(number);
                }}
                href="#featured-items"
                className="page-link"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
