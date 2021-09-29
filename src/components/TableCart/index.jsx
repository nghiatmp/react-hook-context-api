import React, { useContext } from 'react';
import {  Table } from 'reactstrap';
import ProductContext from '../Contexts/ProductsContext';
import './styles.scss';

function Index(props) {
  const { cart } = useContext(ProductContext);

  const itemCart = () => {
    return cart.map((product, index) => 
      <tr key={product.id}>
        <th scope="row">{ index + 1 }</th>
        <td>{product.name}</td>
        <td className="text-center">{product.quantity}</td>
        <td className="text-end">{product.price} $</td>
      </tr>
    );
  }
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Phone Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {itemCart()}
      </tbody>
    </Table>
    );
  }
export default Index;