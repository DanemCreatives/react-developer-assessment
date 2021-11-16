import './featured-hero.style.scss';

const FeaturedHero: React.FC = () => {
  return (
    <div className="featured-hero">
      <div className="featured-hero__canvas"></div>
      <div className="featured-hero__textbox">
        <h1 className="heading">Welcome To Our Book Store</h1>
        <h2 className="subheading">Lorem ipsum dolor sit amet, consectetur adipisc</h2>
      </div>
    </div>
  );
};

export default FeaturedHero;
