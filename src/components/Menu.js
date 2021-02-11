import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Artigos</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/cadastro/">Cadastro</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sobre/">Sobre Desenvolvedor</NavLink>
            </NavItem>            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;