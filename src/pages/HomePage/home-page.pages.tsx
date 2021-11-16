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
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  category: any;
}

const HomePage: React.FC<IProps> = ({ posts, category }: IProps) => {
  return (
    <div className="home-page">
      <Header />
      <FeaturedHero />
      <FeaturedItems posts={posts} category={category} />
    </div>
  );
};

export default HomePage;
