import './App.scss';
import { useEffect, useState } from 'react';
import HomePage from '../pages/HomePage/home-page.pages';
import DetailsPage from '../pages/DetailsPage/details-page.pages';
import { Routes, Route } from 'react-router-dom';

interface IPosts {
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

const App: React.FC = () => {
  const [posts, setPosts] = useState<IPosts['posts']>([]);
  const [loading, setLoading] = useState(true);
  let totalPosts = posts;
  const [updatePosts, setUpdatePosts] = useState(totalPosts);
  const [animate, setAnimate] = useState(false);

  const filteredPostsHandler = (newCategory: string) => {
    totalPosts = totalPosts.filter((single) => {
      let catCheck = false;
      single.categories.forEach((postCat) => {
        if (postCat.name.replaceAll(' ', '-').toLowerCase() === newCategory) {
          catCheck = true;
        }
      });
      return catCheck;
    });
    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);
      setUpdatePosts(totalPosts);
    }, 500);
  };

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((json) => {
        setUpdatePosts(json.posts);
        setPosts(json.posts);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={`App ${animate ? 'animate' : ''}`}>
      <Routes>
        <Route
          path="/"
          element={!loading && <HomePage posts={updatePosts} category={filteredPostsHandler} />}
        />
        <Route path="/:id" element={!loading && <DetailsPage posts={posts} />} />
      </Routes>
    </div>
  );
};

export default App;
