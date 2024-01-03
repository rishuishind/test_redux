import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/cart-Slice';
import { useEffect } from 'react';

const ProductItem = (props) => {
  const { title, price, description, id } = props;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart({
      id,
      title,
      price,
      description
    }));
  }

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://react-http-96a9c-default-rtdb.firebaseio.com/cart.json')
      if (!response.ok) {
        throw new Error('fetching data failed');
      }
      const responseData = await response.json();
      dispatch(cartActions.loadCart(responseData));
    }
    getData().catch(err => console.log(err));

  }, [])

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
