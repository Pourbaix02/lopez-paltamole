
import { IoCartOutline } from "react-icons/io5";
import Badge from 'react-bootstrap/Badge';
import '../styles/cartwidget.css'; 

const CartWidget = () => {

    return(
        <>
    <div className="cart-container">
     <IoCartOutline size={50}/>
    </div>
    <div className="cart-badge">
    <Badge>9</Badge>
    </div>
    </>
);
};

export default CartWidget
