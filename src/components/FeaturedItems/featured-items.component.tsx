import './featured-items.style.scss';
import { Col, Row } from 'tailwind-react-ui';
import SingleItem from '../SingleItem/single-item.component';
import Pagination from '../Pagination/pagination.component';
import { useState, useEffect } from 'react';

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

const FeaturedItems: React.FC<IProps> = ({ posts }: IProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    posts = [];
    console.log(currentPosts);
  }, [posts]);

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

  const categoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    posts = [];
    console.log(posts);
    // posts.map((single) => {
    //   const currPost = single;
    //   single.categories.map((postCat) => {
    //     if (postCat.name.replaceAll(' ', '-').toLowerCase() === e.target.value) {
    //       const filtered = posts.filter((post) => {
    //         for (let i = 0; i < post.categories.length; i++) {
    //           if (post.categories[i].name.includes(e.target.value)) {
    //             return post;
    //           }
    //         }
    //       });
    //     }
    //   });
    // });
  };

  return (
    <div className="featured-items" id="featured-items">
      <select onChange={categoryHandler}>
        {categories.map((category, index) => (
          <option key={index} value={category.replaceAll(' ', '-').toLowerCase()}>
            {category}
          </option>
        ))}
      </select>
      <div className="featured-items__grid">
        <Row>
          {currentPosts.map((single, index) => {
            return (
              <Col key={index} w="1/4" text="center" p="2">
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
