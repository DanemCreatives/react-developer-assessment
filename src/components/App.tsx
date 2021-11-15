import './App.scss';
import { useEffect, useState } from 'react';
import HomePage from '../pages/HomePage/home-page.pages';

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((json) => {
        setLoading(true);
        setPosts(json.posts);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div className="App">{loading && <HomePage posts={posts} />}</div>;
};

export default App;
