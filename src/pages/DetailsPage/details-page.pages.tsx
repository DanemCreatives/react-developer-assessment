import './details-page.style.scss';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface IProps {
  posts: {
    id: string;
    title: string;
    publishDate: string;
    author: {
      name: string;
      avatar: string;
    };
    summary: string;
    categories: {
      id: string;
      name: string;
    }[];
  }[];
}

const DetailsPage: React.FC<IProps> = ({ posts }: IProps) => {
  // get the parameters from the url
  const params = useParams();
  // filter the post to find the featured item
  const item = posts.find((post) => post.id === params.id);
  // Conditionally set featured item details
  return (
    <div className="details-page">
      <ul>
        <li>
          <Link to="/">&#171; Go Back</Link>
        </li>
        <li>
          <span>ID: </span>
          {item ? item.id : null}
        </li>
        <li>
          <span>Title: </span>
          {item ? item.title : null}
        </li>
        <li>
          <span>Author: </span>
          {item ? item.author.name : null}
        </li>
        <li>
          <span>Publish Date: </span>
          {item ? item.publishDate : null}
        </li>
        <li>
          <span>Summary: </span>
          {item ? item.summary : null}
        </li>
      </ul>
    </div>
  );
};

export default DetailsPage;
