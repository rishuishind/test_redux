import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-Slice';

const CartItem = (props) => {
  const item = useSelector(state => state.cart.items);
  const quan = useSelector(state => state.cart.quantity);
  const dispatch = useDispatch();
  console.log(item);
  return (
    <>
      {(quan > 0) && <li className={classes.item}>
        <header>
          <h3>{item[0].title}</h3>
          <div className={classes.price}>
            ${item[0].total}{' '}
            <span className={classes.itemprice}>(${item[0].price}/item)</span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{item[0].quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={() => dispatch(cartActions.removeFromCart(item))}>-</button>
            <button onClick={() => dispatch(cartActions.addToCart(item))}>+</button>
          </div>
        </div>
      </li>}
    </>
  );
};

export default CartItem;
