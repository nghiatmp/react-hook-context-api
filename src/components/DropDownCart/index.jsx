import React, { useContext, useState } from 'react';
import { Dropdown, DropdownToggle,DropdownMenu, DropdownItem } from 'reactstrap';
import { calculateSunMoneyCart } from '../../utils/helpers';
import ProductContext from '../Contexts/ProductsContext';
import TableCart from '../TableCart';
import './styles.scss';

function Index(props) {
  const { cart } = useContext(ProductContext);
  console.log(cart);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const renderCartDropDownMenu = () => {
    return <div>
        <DropdownItem >
          <TableCart />
        </DropdownItem>
        <DropdownItem divider/>
        <DropdownItem>Total : {calculateSunMoneyCart(cart)} $</DropdownItem>
        </div>
  }

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        { cart.length }
      </DropdownToggle>
          <DropdownMenu right>
            {cart.length > 0?  renderCartDropDownMenu() : <h5>No phone in cart</h5>}
          </DropdownMenu>  
    </Dropdown>
  );
}

export default Index;