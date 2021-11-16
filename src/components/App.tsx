import './App.scss';
import { useEffect, useState } from 'react';
import HomePage from '../pages/HomePage/home-page.pages';
import DetailsPage from '../pages/DetailsPage/details-page.pages';
import { Routes, Route } from 'react-router-dom';

// Declare all property types to be used
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
  // Assign IPost values to posts state
  const [posts, setPosts] = useState<IPosts['posts']>([]);
  // Set new variable totalPosts to posts from API call
  let totalPosts = posts;
  // state to update the posts
  const [updatePosts, setUpdatePosts] = useState(totalPosts);
  // true false values for loading & animation states
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);

  // Category filter to display posts by selected category
  const filteredPostsHandler = (newCategory: string) => {
    // modify total posts to only display the filtered posts
    totalPosts = totalPosts.filter((single) => {
      // set the category checker
      let catCheck = false;
      // loop through categories and when one is found to be a match, set the category checker to true
      single.categories.forEach((postCat) => {
        const category = postCat.name.replaceAll(' ', '-').toLowerCase();
        if (category === newCategory) {
          catCheck = true;
        }
      });
      return catCheck;
    });

    // Fire animation
    setAnimate(true);

    // After animation, set the updated posts
    setTimeout(() => {
      setAnimate(false);
      setUpdatePosts(totalPosts);
    }, 500);
  };

  // Get data from API
  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((json) => {
        // When data returned, set the state for posts and updated posts
        setUpdatePosts(json.posts);
        setPosts(json.posts);
        // Set loading flag ensuring components are only loaded in if state is false
        setLoading(false);
      })
      // catch error if no response from API
      .catch((err) => console.log(err));
  }, []);

  return (
    // Set up routing and pass through props
    <div className={`App ${animate ? 'animate' : ''}`}>
      <Routes>
        <Route
          path="/"
          element={!loading && <HomePage posts={updatePosts} category={filteredPostsHandler} />}
        />
        <Route path="/:id" element={!loading && <DetailsPage posts={updatePosts} />} />
      </Routes>
    </div>
  );
};

export default App;
