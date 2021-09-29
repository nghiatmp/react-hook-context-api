import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';
import { userInfor } from '../../constants';
import './styles.scss';

function Index(props) {
  let history = useHistory();
  if (localStorage.getItem('user')) {
    history.push('/');
  }
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [messageError, setMessageError] = useState(''); 

  const onChangeValue= (e) => {
    const {name, value} = e.target;
    setState({
      ...state,
      [name]: value
    })
  }

  const onSubmit= (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessageError('');
    setTimeout(() => {
      const {email , password } = state;
      if (email === userInfor.email && password === userInfor.password) {
        localStorage.setItem('user', JSON.stringify(state));
        history.push('/');
      } else {
        setMessageError('Tài khoản hoặc mật khẩu không đúng');
      }
      setIsLoading(false);
    }, 500);
    
    console.log(state);
  }
  return (
    <div className="login-form">
      <Form onSubmit={(event) => onSubmit(event)}>
        <h3 className="text-center">Login</h3>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            onChange={(event) => onChangeValue(event)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            onChange={(event) => onChangeValue(event)}
          />
        </FormGroup>
        <Button
          color="primary"
          type="submit"
          disabled={isLoading}
        >
          { isLoading &&  
            <Spinner style={{ width: '1rem', height: '1rem', marginRight: '5px' }}>
              <span className="visually-hidden"></span>
            </Spinner>
          }
          Login
        </Button>

        {messageError &&  <p className="error-message"> {messageError} </p> }
      </Form>
    </div>
  );
}
export default Index;