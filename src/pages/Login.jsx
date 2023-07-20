import axios from "axios";
import React, { useState } from "react";
import { styled } from "styled-components";
import { Navigate } from "react-router-dom";

export const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);

  const LOGIN_URL = "https://api.escuelajs.co/api/v1/auth/login";

  //test login
  // "email": "john@mail.com",
  // "password": "changeme"

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    fetch(LOGIN_URL, requestOptions)
      .then((response) => {
        if (response.status === 200) {
          // Alert "LOGIN SUCCESS"
          alert("Login Success");
        } else if (response.status === 401) {
          // Alert "No matching user found"
          alert("No matching user found");
        } else if (response.status === 400) {
          alert("Wrong details");
        }

        return response.json();
      })
      .then((data) => {
        setEmail("");
        setPassword("");
        setNavigate(true)
        console.log(data);
        const access = data.access_token;
        const refresh = data.refresh_token;
        localStorage.setItem("accessToken", access);
        localStorage.setItem("refreshToken", refresh);
      });

    
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    alert("로그아웃 하셨습니다");
  };

  if (navigate) {
    return <Navigate to="/signup" />;
  }

  return (
    <LoginContainer>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Login</Button>
        <button onClick={handleLogout}>Logout 임시</button>
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
