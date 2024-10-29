
import '../styles/navbar.css'; 
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  
  const handleMenuClick = () => {
    navigate('/store');
  };

  const handleHomeClick = () => {
    navigate('/');
  };


  return (
    <div className="container">
      <nav>
        <ul className="nav-links">
          <li>
            <button onClick={handleHomeClick}>Inicio</button>
          </li>
          <li>
            <button onClick={handleMenuClick}>Menú</button>
          </li>
          <li>
            <a href="#services">Nosotros</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
