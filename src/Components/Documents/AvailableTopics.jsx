import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  height: 60vh;
`;

const Bar = styled.div`
  height: 100%;
  width: 12px;
  background-color: #eb5757;
  margin-right: 20px;
`;
const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid grey;
  cursor: pointer;
  &:hover {
    background-color: #dfdbcf;
    color: #333333;
  }
  &:hover ${Bar} {
    background-color: #3b50a0;
  }
`;

const Title = styled.h3``;

const AvailableTopics = ({ contents }) => {
  return (
    <Container>
      {contents.map((content) => (
        <ContentContainer>
          <Bar></Bar>
          <Title>{content}</Title>
        </ContentContainer>
      ))}
    </Container>
  );
};

export default AvailableTopics;
