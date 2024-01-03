import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useEffect } from 'react';
import { cartActions } from '../../store/cart-Slice';

const Cart = (props) => {

  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (<CartItem
          item={{ title: item.title, quantity: item.quantity, total: item.totalPrice, price: item.price, id: item.id }}
        />))}

      </ul>
    </Card>
  );
};

export default Cart;
