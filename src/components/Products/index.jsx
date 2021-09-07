import React, { useContext } from 'react';
import ProductItem from '../ProductItem';
import { Container, Row, Col } from 'reactstrap';
import ProductContext from '../Contexts/ProductsContext';

const Index = (props) => {
  console.log('Product render');
  const { products } = useContext(ProductContext);

  const renderListProduct = () => {
    return products.map((phone) => 
      <Col xs="3" sm="6" md="3" key={phone.id}>
        <ProductItem  phone={phone}/>
      </Col>)
  }
  return (
      <div>
        <h2>Product</h2>
        <Container>
          <Row>
              {renderListProduct()}
          </Row>
        </Container>
        
    </div>
  );
}

export default Index;