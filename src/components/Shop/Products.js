import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const DUMMY_PRODUCTS = [
    {
      id: 'id1',
      title: 'Test',
      price: 6,
      description: 'This is a first product - amazing!'
    },
    {
      id: 'id2',
      title: 'Test2',
      price: 8,
      description: 'This is a second product - amazing!'
    },
    {
      id: 'id3',
      title: 'Test3',
      price: 5,
      description: 'This is a third product - amazing!'
    },
    {
      id: 'id4',
      title: 'Test4',
      price: 10,
      description: 'This is a fourth product - amazing!'
    }
  ]

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}

      </ul>
    </section>
  );
};

export default Products;
