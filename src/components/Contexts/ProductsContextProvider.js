import { phoneData } from '../../constants/index';
import { useState } from 'react';
import ProductContext from './ProductsContext';

function ProductsContextProvider(props) {
  const [store, setStore] = useState({
    products : phoneData,
    cart: [],
  });

  const updateCart = (product) => {
    if (!product) return;
    const {id} = product;
    const indexProductInCart = store.cart.findIndex((product) => id === product.id);
    const newCart = [...store.cart];
    if (indexProductInCart !== -1) {
      newCart[indexProductInCart].quantity += 1; 
    } else {
      newCart.push({
        ...product,
        quantity : 1,
      })
    }
    setStore({
      ...store,
      cart: newCart
    });
    
  }
  return (
    <ProductContext.Provider
      value={{
        ...store,
        updateCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
 
export default ProductsContextProvider;
