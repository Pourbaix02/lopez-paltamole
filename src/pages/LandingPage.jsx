import '../styles/landingPage.css'
import landing1 from '../assets/landing1.JPG'
import Navbar from '../components/Navbar'
import BrandLogo from '../components/BrandLogo';


const LandingPage = () => {
  
    return (
      <div className="main-container">
        <BrandLogo/>
        <Navbar/>
        <div className="top-container">
        </div>
        <div className="landing-image-container">
            <img src={landing1} alt="" srcSet="" />
        </div>
        <div className="first-text-section">
            <p>Deléitate con la fusión perfecta de sabores Tex-Mex, donde la autenticidad se encuentra con un estilo contemporáneo.</p>
        </div>
        <div className="landing-second-section-container">
        </div>
        <div className="landing-third-section-container">
        </div>
        <div className="landing-forth-section-container">
        </div>
      </div>
    );
};

export default LandingPage