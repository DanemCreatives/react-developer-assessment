import './featured-items.style.scss';
import { Col, Row } from 'tailwind-react-ui';
import SingleItem from '../SingleItem/single-item.component';
import Pagination from '../Pagination/pagination.component';
import { useState } from 'react';

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
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  category: any;
}

const FeaturedItems: React.FC<IProps> = ({ posts, category }: IProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const [categories] = useState([
    'Surveys and Forms',
    'Digital Marketing',
    'Platform News and Updates',
    'Tips and Best Practise',
    'Data Management',
    'Marketing Analytics',
    'Landing Pages',
    'Ecommerce',
    'Marketing Automation',
    'Email Marketing',
  ]);

  return (
    <div className="featured-items" id="featured-items">
      <div className="featured-items__nav">
        <div className="box">Category:</div>
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            category(e.target.value);
            setCurrentPage(1);
          }}
        >
          {categories.map((category, index) => (
            <option key={index} value={category.replaceAll(' ', '-').toLowerCase()}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="featured-items__grid">
        <Row>
          {currentPosts.map((single, index) => {
            return (
              <Col key={index} w={{ def: 'full', sm: '1/2', lg: '1/4' }} text="center" p="2">
                <SingleItem data={single} />
              </Col>
            );
          })}
        </Row>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={(number) => setCurrentPage(number)}
        />
      </div>
    </div>
  );
};

export default FeaturedItems;
