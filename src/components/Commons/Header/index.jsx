import React from 'react';
import './styles.scss'
import { Nav, NavItem } from 'reactstrap';
import {Link } from 'react-router-dom';
import CartDropdown from '../../DropDownCart';
function Index(props) {
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
      <div className="header__cart">
        <i className="bi bi-cart-dash"></i>
        <CartDropdown />
       </div>
    </div>
	);
}

export default Index;