import FeaturedHero from '../../components/FeaturedHero/featured-hero.component';
import FeaturedItems from '../../components/FeaturedItems/featured-items.component';
import Header from '../../components/Header/header.component';
import './home-page.style.scss';

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

const HomePage: React.FC<IProps> = ({ posts }: IProps) => {
  return (
    <div className="home-page">
      <Header />
      <FeaturedHero />
      <FeaturedItems posts={posts} />
    </div>
  );
};

export default HomePage;
