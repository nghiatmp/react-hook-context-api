import React from 'react';
import './styles.scss'
import { Nav, NavItem } from 'reactstrap';
import { useHistory } from 'react-router';
import {Link } from 'react-router-dom';
import CartDropdown from '../../DropDownCart';
import AccountDropdown from '../../AccountDropDown';
function Index({onLogOut}) {
  // let history = useHistory();
  // const onLogOut = () => {
  //   localStorage.removeItem('user');
  //   history.push('/login');
  // }
	return (
		<div className="header">
      <div className="header__title">
        <h2>DMobile</h2>
      </div>
      <Nav>
        <NavItem>
          <Link to="/products">Product</Link>
        </NavItem>
        <NavItem>
          <Link to="/cart">Cart</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
      </Nav>
      <div className="d-flex">
        <div className="header__cart">
          <i className="bi bi-cart-dash"></i>
          <CartDropdown />
        </div>

        <div className="header__account">
          <i className="bi bi-person"></i>
          <AccountDropdown onLogOut={onLogOut} />
        </div>
      </div>
    </div>
	);
}

export default Index;