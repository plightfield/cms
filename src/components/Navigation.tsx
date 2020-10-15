import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const StyledNav = styled(Nav)`
  display: flex;
  flex-flow: row wrap;
  & > * {
    margin: 0 1em;
  }
`;

function Navigation(props: { active: string }) {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Navbar.Brand href='/'>RCMS 系统</Navbar.Brand>
      <StyledNav>
        <Nav.Link href='/home' active={props.active === "/home"}>
          首页
        </Nav.Link>
        <Nav.Link
          href='/component-adder'
          active={props.active === "/component-adder"}
        >
          组件添加器
        </Nav.Link>
      </StyledNav>
    </Navbar>
  );
}

export default Navigation;
