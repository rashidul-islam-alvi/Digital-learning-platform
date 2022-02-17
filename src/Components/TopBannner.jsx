import React from "react";
import styled, { keyframes } from "styled-components";

const myanimation = keyframes`
  0% {background-color: #eb5757;}
  25%{background-color:#3b50a0;}
  50%{background-color:#eb5757;}
  75%{background-color:#3b50a0;}
  100% {background-color: #eb5757;}
}`;

const Container = styled.div`
  background-color: #eb5757;
  text-align: center;
  height: 5vh;
  animation-name: ${myanimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`;
const Heading = styled.h5`
  margin: 0;
  padding: 5px;
  color: white;
`;

const TopBannner = () => {
  return (
    <Container>
      <Heading>
        ভাষার মাস উপলক্ষে আমাদের সকল কোর্সে পাচ্ছেন ৫২% ছাড়!!!!!!!!
      </Heading>
    </Container>
  );
};

export default TopBannner;
