import '../styles/cartWidget.css'
import { ReactComponent as CartIcon } from '../assets/cartIcon.svg';




const CartWidget = () => {
  
    return (
      <div className="main-cart-container">
        <CartIcon className="cart-icon" />
      </div>
    );
};

export default CartWidget;