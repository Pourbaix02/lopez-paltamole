import logo from '../assets/logo.svg'
import '../styles/brandlogo.css'; 

const BrandLogo = () => {

    return(
        <>
    <div className="logo-container">
     <img src={logo} alt="paltamole logo" />
    </div>
    </>
);
};

export default BrandLogo