import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../App.css";

const Container = styled.div`
  height: 15vh;
  display: flex;
  padding: 0 50px;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 99999;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;
const LogoContainer = styled.div`
  flex: 2;
`;
const Logo = styled.h1`
  font-family: "Baloo Da 2";
  cursor: pointer;
  color: #3b50a0;
  &:hover {
    color: #eb5757;
  }
`;
const NavlistContainer = styled.div`
  flex: 9;
`;
const NavLists = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
`;
const List = styled.li`
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    color: #eb5757;
  }
`;

const ButtonContainer = styled.div``;

const Button = styled.button`
  padding: 15px 20px;
  font-size: 15px;
  background-color: #3b50a0;
  border: none;
  outline: none;
  color: white;
  border-radius: 10px;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    background-color: #eb5757;
  }
`;

const Navbar = () => {
  const isLogin = false;

  return (
    <Container>
      <LogoContainer>
        <Logo>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            শিখবে নাকি ?
          </Link>
        </Logo>
      </LogoContainer>

      <NavlistContainer>
        <NavLists>
          <List>
            <Link
              to="/courses"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              কোর্স
            </Link>
          </List>
          <List>
            <Link
              to="/ebooks"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              ই-বুকস
            </Link>
          </List>
          <List>
            <Link
              to="/problemsolving"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              প্রবলেম-সলবিং
            </Link>
          </List>
          <List>
            <Link
              to="/blogs"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              ব্লগ
            </Link>
          </List>
        </NavLists>
      </NavlistContainer>

      <ButtonContainer>
        {isLogin ? (
          <Link
            to="/dashboard"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Button>আমার প্রোফাইল</Button>
          </Link>
        ) : (
          <Link
            to="/login"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Button>লগইন/সাইন আপ</Button>
          </Link>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default Navbar;
