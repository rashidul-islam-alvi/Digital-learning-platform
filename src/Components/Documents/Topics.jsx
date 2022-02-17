import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AvailableTopics from "./AvailableTopics";
import { AllCourses } from "../../Data/data";
import "../../App.css";

const Container = styled.div`
  padding: 0 50px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const HeadlinesContainer = styled.div`
  text-align: center;
  height: 10vh;
  display: flex;
  justify-content: center;
`;
const Headlines = styled.div`
  display: flex;
  height: 40px;
  width: 50%;
  height: 100%;
  padding: 0;
  justify-content: center;
  align-items: center;
`;
const Headline = styled.p`
  display: flex;
  align-items: center;
  margin-right: 30px;
  width: fit-content;
  height: 40px;
  justify-content: center;
  border-radius: 10px;
  padding: 10px 10px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #eb5757;
    color: white;
  }
`;
const Topics = () => {
  const [value, setValue] = useState(1);

  return (
    <Container>
      <HeadlinesContainer>
        <Headlines>
          {AllCourses.map((course, index) => (
            <Headline
              key={index}
              // style={{
              //   backgroundColor: `${index === value ? "#eb5757" : "white"}`,
              //   color: `${index === value ? "white" : "black"}`,
              // }}
              className={`${index === value && "active"}`}
              onClick={() => {
                setValue(index);
              }}
            >
              {course.title}
            </Headline>
          ))}
        </Headlines>
      </HeadlinesContainer>

      <AvailableTopics contents={AllCourses[value].contents} />
    </Container>
  );
};

export default Topics;
