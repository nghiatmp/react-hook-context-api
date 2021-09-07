import React from 'react';
import { Container } from 'reactstrap';
import CartTable from '../TableCart';

function index(props) {
  return (
    <div className="mt-5">
      <Container>
          <CartTable />
      </Container>
    </div>
  );
}

export default index;