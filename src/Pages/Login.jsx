import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 90vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("./images/B5.webp") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Baloo Da 2";
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  box-shadow: -2px 3px 3px 2px rgba(158, 158, 155, 0.8);
  -webkit-box-shadow: -2px 3px 3px 2px rgba(158, 158, 155, 0.8);
  -moz-box-shadow: -2px 3px 3px 2px rgba(158, 158, 155, 0.8);
`;

const HeadlineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Headline = styled.h1`
  text-align: center;
  font-weight: 300;
  margin: 20px;
`;
const CloseButton = styled.div`
  font-size: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #3b50a0;
  outline: none;
  font-size: 20px;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 12px 20px;
  background-color: #3b50a0;
  color: white;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 20px;

  &:hover {
    background-color: tomato;
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <HeadlineWrapper>
          <Headline>সাইন ইন</Headline>
          <CloseButton>
            <Link to="/">
              <i className="fa-solid fa-xmark"></i>
            </Link>
          </CloseButton>
        </HeadlineWrapper>

        <Form>
          <Input placeholder="ইউজারনেম" />
          <Input placeholder="পাসওয়ার্ড" />
          <ButtonContainer>
            <Button>সাবমিট করুন</Button>
          </ButtonContainer>

          <p style={{ fontSize: "18px", margin: "0" }}>
            <Link
              to="/"
              style={{
                color: "#3b50a0",
                textDecoration: "inherit",
                marginLeft: "9px",
              }}
            >
              পাসওয়ার্ড রিকোভার করুন এখানে।
            </Link>
          </p>
          <p style={{ fontSize: "18px", margin: "0" }}>
            একাউন্ট নেই?
            <Link
              to="/signup"
              style={{
                color: "#3b50a0",
                textDecoration: "inherit",
                marginLeft: "9px",
              }}
            >
              নতুন একাউন্ট খুলুন এখানে।
            </Link>
          </p>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
