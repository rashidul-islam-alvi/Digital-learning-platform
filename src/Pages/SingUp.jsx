import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const SingUp = () => {
  return (
    <Container>
      <h1>Sign Up</h1>
      <p>
        Already have an account ?
        <Link
          to="/login"
          style={{
            color: "blue",
            textDecoration: "inherit",
            marginLeft: "9px",
          }}
        >
          Login here.
        </Link>
      </p>
    </Container>
  );
};

export default SingUp;
