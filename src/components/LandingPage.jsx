import '../styles/landingPage.css'
import landing1 from '../assets/landing1.JPG'

const LandingPage = () => {
    

    return (
      <div className="main-container bg-[#D2B400]">
        <div className="top-container">
        </div>
        <div className="landing-image-container">
            <img src={landing1} alt="" srcSet="" />
        </div>
      </div>
    );
};

export default LandingPage