import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 80vh;
  align-items: center;
  padding: 0 50px;
  background-color: #e0f1f1;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Heading = styled.h1`
  color: #3b50a0;
`;
const ButtonContainer = styled.div``;
const Button = styled.button`
  padding: 15px 35px;
  margin-right: 10px;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 10px;
  font-size: 17px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const HeroImageContaine = styled.div``;
const Hero = styled.img`
  width: 440px;
  height: 440px;
`;

const HeroSection = ({ data }) => {
  return (
    <Container>
      <Left>
        <Heading>{data.title}</Heading>
        <ButtonContainer>
          <Button style={{ backgroundColor: "#eb5757", color: "white" }}>
            {data.buttontext1}
          </Button>
          <Button style={{ color: "#eb5757", border: "1px solid #eb5757" }}>
            {data.buttontext2}
          </Button>
        </ButtonContainer>
      </Left>
      <Right>
        <HeroImageContaine>
          <Hero src={data.img} />
        </HeroImageContaine>
      </Right>
    </Container>
  );
};

export default HeroSection;
