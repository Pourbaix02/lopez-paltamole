
import '../styles/navbar.css'; // Asegúrate de tener tu archivo CSS

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
          <h1 className="logo">Mi Logo</h1>
        </div>
        <div className="nav-space"></div>
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
      
    </nav>
  );
};

export default Navbar;
