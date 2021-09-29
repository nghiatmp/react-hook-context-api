import React from 'react';

const nameComponent =  React.memo((props) => {
  console.log('name render');
  const { name, changeName } = props;
  return (
    <div>
        <h2>This is { name } </h2>
    </div>
  );
});

export default nameComponent;
