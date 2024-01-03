import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { toggleActions } from '../../store/ui-slice';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const quantity = useSelector(state => state.cart.quantity);

  const toggleCartButton = () => {
    dispatch(toggleActions.toggleState());
  }

  return (
    <button className={classes.button} onClick={toggleCartButton}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
