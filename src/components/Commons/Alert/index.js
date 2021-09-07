import React from 'react';
import { Alert } from 'reactstrap';

function index(props) {
  const { message, variant } = props;
  return (
    <div>
      <Alert color={variant}>
          { message }
      </Alert>
    </div>
  );
}

export default index;