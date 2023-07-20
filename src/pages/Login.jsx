import React from 'react'
import { styled } from 'styled-components'

const LoginContainer = styled.section`
  border: 1px solid black;


height: 350px;
width: 350px;
margin: 100px auto;

border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 120px;
`
const Input = styled.input`
  width: 200px;
  height: 24px;
  border-radius: 3px;
  border-color: rgba(0,0,0,0.2);
  padding: 3px;
`
export const Login = () => {
  return (
    <LoginContainer>
      <h1>Login</h1>
      <Form>
          <label htmlFor="">Username</label>
          <Input type="text"  />
          <label htmlFor="">Password</label>
          <Input type="password"  />
      </Form>
    </LoginContainer>
  )
}
