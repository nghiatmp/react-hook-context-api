import React, { useContext } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import phoneSrc from '../../statics/images/phone.jpg'
import PropTypes from 'prop-types';
import './styles.scss';
import ProductContext from '../Contexts/ProductsContext';

Index.propTypes = {
  phone : PropTypes.object
};

Index.defaultProps = {
  phone: [],
}

function Index({phone}) {
  console.log('ProductItem render');
  const { updateCart } = useContext(ProductContext);
  return (
    <div className="product-item">
      <Card className="product-item__card">
        <div className="product-item__img">
          <CardImg top width="100%" src={phoneSrc} alt="Card image cap" />
        </div>
        <CardBody>
          <CardTitle tag="h5">{phone.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Xiaomi</CardSubtitle>
          <h5>{phone.price} $</h5>
          <CardText>{phone.description}</CardText>
          <Button
            color="primary"
            onClick={() => updateCart(phone)}
          >
            Add To Cart
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Index;