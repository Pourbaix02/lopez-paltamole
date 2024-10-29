import '../styles/storepage.css'
import Navbar from '../components/Navbar'
import CartWidget from '../components/CartWidget';

const StorePage = () => {
    

    return (
    <>
    <div className="main-store-container">
        <Navbar/>
        <CartWidget/>
    </div>
    </>
    );
};

export default StorePage