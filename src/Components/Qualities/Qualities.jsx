import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { QualitiesData as Data } from "../../Data/data";

const Container = styled.div`
  display: flex;
  padding: 0 50px;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
const Left = styled.div`
  flex: 1;
`;
const Headline = styled.h1`
  color: #3b50a0;
`;
const Lists = styled.ul`
  width: 75%;
`;
const List = styled.li`
  margin-bottom: 30px;
  font-size: 20px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const Center = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 10%;
  /* background-color: #7ccacf; */
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
`;

const Image = styled.img`
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
`;

const ButtonContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Forward = styled.div`
  width: 60px;
  height: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.05s ease-in;
  z-index: 9999;
  border-radius: 50%;
  &:hover {
    font-size: 50px;
  }
`;

const Backward = styled.div`
  width: 60px;
  height: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.05s ease-in;
  z-index: 9999;
  border-radius: 50%;

  &:hover {
    font-size: 50px;
  }
`;

const Qualities = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : Data.length - 1);
    } else if (direction === "right") {
      setSlideIndex(slideIndex < Data.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Left>
        <Headline>{Data[slideIndex].header}</Headline>
        <Lists>
          {Data[slideIndex].desc.map((desc) => (
            <List>{desc}</List>
          ))}
        </Lists>
      </Left>
      <Right>
        <Center>
          <Image src={Data[slideIndex].img} />
          <ButtonContainer>
            <Forward onClick={() => handleClick("left")}>
              <i className="fa-solid fa-chevron-left"></i>
            </Forward>
            <Backward onClick={() => handleClick("right")}>
              <i className="fa-solid fa-chevron-right"></i>
            </Backward>
          </ButtonContainer>
        </Center>
      </Right>
    </Container>
  );
};

export default Qualities;
