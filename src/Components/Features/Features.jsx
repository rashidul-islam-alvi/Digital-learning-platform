import React from "react";
import styled from "styled-components";
import { FeaturesData as Data } from "../../Data/data";

const Container = styled.div`
  margin: 100px 0;
  margin-bottom: 0;
  padding: 0 50px;
`;
const HeaderContainer = styled.div`
  text-align: center;
`;
const Header = styled.p`
  font-size: 30px;
  margin-bottom: 100px;
`;

const FeaturesContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40vh;
`;
const SingleFeature = styled.div`
  padding: 0 20px;
`;
const FeatureImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const FeatureImage = styled.img`
  width: 30%;
`;
const FeatureDetails = styled.div``;
const Headline = styled.h2`
  font-size: 20px;
  text-align: center;
  color: #3b50a0;
`;
const Desc = styled.p`
  font-size: 15px;
  text-align: center;
`;

const Features = () => {
  console.log(Data);

  return (
    <Container>
      <HeaderContainer>
        <Header>আমাদের ফিচারগুলো দেখে নিন এক পলকে</Header>
      </HeaderContainer>

      <FeaturesContainer>
        {Data.map((Feature) => (
          <SingleFeature>
            <FeatureImageContainer>
              <FeatureImage src={Feature.img} />
            </FeatureImageContainer>
            <FeatureDetails>
              <Headline>{Feature.title}</Headline>
              <Desc>{Feature.desc}</Desc>
            </FeatureDetails>
          </SingleFeature>
        ))}
      </FeaturesContainer>
    </Container>
  );
};

export default Features;
