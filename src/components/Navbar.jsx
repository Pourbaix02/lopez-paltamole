
import '../styles/navbar.css'; // Asegúrate de tener tu archivo CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1 className="logo">Mi Logo</h1>
        </div>
        <div className="elementos">
          <ul className="nav-links">
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#about">Nosotros</a>
            </li>
            <li>
              <a href="#services">Menú</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
