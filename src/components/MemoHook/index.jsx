import React, { useCallback, useState } from 'react';
import NameComponent from './nameComponent';

function Index(props) {
  console.log('index render');
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('NghiaLM');

  const increaseCounter = () => {
    setCounter(counter + 1);
  }

  // su dung useCallback
  const changeName = useCallback((name) => {
    setName(name);
  }, []);

    // const changeName = (name) => {
    // setName(name);
    // };
  return (
    <div>
        <h2>Demo Memo in Hook</h2>
        <p>Couter : { counter }</p>
        <button onClick={increaseCounter}>increase couter</button>
        <NameComponent name={name} changeName={changeName}/>
    </div>
  );
}

export default Index;