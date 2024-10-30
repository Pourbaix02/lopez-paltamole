import '../styles/storepage.css'
import Navbar from '../components/Navbar'
import CartWidget from '../components/CartWidget';

import BrandLogo from '../components/BrandLogo';

const StorePage = () => {
    

    return (
      
    <div className="main-container">
       <div>
        <Navbar/>
        <BrandLogo/>
        <CartWidget/>
        </div>
    </div>
 );
};

export default StorePage