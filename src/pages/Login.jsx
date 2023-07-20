import React from "react";
import { styled } from "styled-components";




export const Login = ({user}) => {

  return (
    <LoginContainer>
      <h1>Login</h1>
      <Form>
        <label htmlFor="username">Username</label>
        <Input type="text" id="username" />
        <label htmlFor="password">Password</label>
        <Input type="password" id="password" />
        <Button >Login</Button>
      </Form>
    </LoginContainer>
  );
};

const LoginContainer = styled.section`
  border: 1px solid black;

  height: 400px;
  width: 350px;
  margin: 100px auto;

  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 200px;
`;
const Input = styled.input`
  width: 240px;
  height: 28px;
  border-radius: 3px;
  border-color: rgba(0, 0, 0, 0.2);
  padding: 3px;
`;

const Button = styled.button`
  width: 200px;
  border-color: rgba(0, 0, 0, 0.2);
  height: 30px;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
  }
`;
