import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const NavigationBar = styled.nav`
  width: 100wh;
  height: 70px;
  background-color: #015ad0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;

  color: #fff;
  font-size: 24px;
  font-weight: 500;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40%;

  &:hover {
    cursor: pointer;
  }

`;

export const Header = () => {
  return (
    <NavigationBar>
      <NavItems>
        <div>Home</div>
        <div>Login</div>
        <div>Signup</div>
      </NavItems>
    </NavigationBar>
  );
};
