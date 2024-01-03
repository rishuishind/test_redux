import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect, useState } from 'react';
import Notification from './components/UI/Notification';
import { toggleActions } from './store/ui-slice';

let isInitial = true;

function App() {

  const showCart = useSelector(state => state.ui.isShowing);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();


  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    setIsLoading(true);
    const sendCartData = async () => {
      dispatch(toggleActions.setNotification({
        title: 'sending',
        message: 'sending your request',
        status: ''
      }))
      const response = await (fetch('https://react-http-96a9c-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      }));
      if (!response.ok) {
        throw new Error('sending cart data failed');
      }
      dispatch(toggleActions.setNotification({
        title: 'Sent',
        message: 'Sent your request successfully',
        status: 'success'
      }))
    }

    sendCartData().catch(() => dispatch(toggleActions.setNotification({
      title: 'Failed',
      message: 'Sending your request Failed',
      status: 'error'
    })))
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, [cart, dispatch])

  return (
    <>
      {isLoading && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
