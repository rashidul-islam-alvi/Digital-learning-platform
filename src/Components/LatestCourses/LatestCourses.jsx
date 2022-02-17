import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LatestCourse from "./LatestCourse";

const Container = styled.div`
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 20px;
`;
const HeadlineContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
  font-size: 30px;
`;

const LatestCourseContainer = styled.div``;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 40px;
  font-size: 20px;
  border: none;
  outline: none;
  background-color: #eb5757;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 6px -6px black;
  }
`;

const LatestCourses = () => {
  return (
    <Container>
      <HeadlineContainer>
        <p>আমাদের লেটেস্ট কোর্সসমূহ</p>
      </HeadlineContainer>

      <LatestCourseContainer>
        <LatestCourse />
      </LatestCourseContainer>

      <ButtonContainer>
        <Button>
          <Link
            to="/courses"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            সকল কোর্সসমূহ
          </Link>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default LatestCourses;
