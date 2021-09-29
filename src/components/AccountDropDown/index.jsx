import React, { useState } from 'react';
import { Dropdown, DropdownToggle,DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';
import './styles.scss';

Index.prototype = {
  onLogOut : PropTypes.func,
}
Index.defaultProps = {
  onLogOut : () => {}
}

function Index({onLogOut}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret tag="span">
        Admin
      </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <i className="bi bi-gear"></i>
              Setting
            </DropdownItem>
            <DropdownItem>
            <i className="bi bi-person"></i>
              Account
            </DropdownItem>
            <DropdownItem divider/>
            <DropdownItem>
              <i className="bi bi-box-arrow-in-right"></i>
              <span onClick={onLogOut}>Logout</span>
            </DropdownItem>
          </DropdownMenu>  
    </Dropdown>
  );
}

export default Index;