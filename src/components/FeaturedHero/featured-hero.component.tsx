import './featured-hero.style.scss';

const FeaturedHero: React.FC = () => {
  const state = {
    heading: 'Welcome To Our Book Store',
    subheading: 'Where Timeless Swiss Quality Meets the Mountains',
  };
  return (
    <div className="featured-hero">
      <div className="featured-hero__canvas"></div>
      <div className="featured-hero__textbox">
        <h1 className="heading">{state.heading}</h1>
        <h2 className="subheading">{state.subheading}</h2>
      </div>
    </div>
  );
};

export default FeaturedHero;
