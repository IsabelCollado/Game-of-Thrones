import titleThrones from '../images/image.jpeg';

const Header = () => {
  return (
    <header className="header">
      <div className="div_img_header">
        <img
          src={titleThrones}
          alt="title Game of Thrones"
          className="title_header"
        />
      </div>
    </header>
  );
};

export default Header;
