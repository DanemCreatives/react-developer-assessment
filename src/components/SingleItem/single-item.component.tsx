import './single-item.style.scss';
import BookCover from '../../img/book-placeholder.png';

interface IProps {
  data: {
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
  };
}

const SingleItem: React.FC<IProps> = ({ data }: IProps) => {
  return (
    <div className="single-item">
      <div className="single-item__content">
        <div className="single-item__canvas">
          <img src={BookCover} alt={data.summary} />
        </div>
        <div className="single-item__textbox">
          <p className="title">{data.title}</p>
          <p className="author">{data.author.name}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
