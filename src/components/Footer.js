import images from '../images/images.jpeg';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <img className="icono_footer" src={images} alt="game of thrones" />
        <span className="footer-copy">
          &copy Game of Thrones|| Isabel Collado Herrera
        </span>
      </footer>
    </>
  );
};

export default Footer;
