import React from "react";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Topics from "../Components/Documents/Topics";
const Container = styled.div``;

const HeroSection = styled.div`
  display: flex;
  background: url("./images/B3.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
  padding: 0 50px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const HeroSectionHeadline = styled.h1`
  word-spacing: 0.01px;
  font-family: "Baloo Da 2";
  width: 80%;
  color: #3b50a0;
`;

const Desc = styled.p`
  margin: 0;
  width: 80%;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Headline = styled.p`
  text-align: center;
  font-size: 40px;
`;

const ImageContainer = styled.div``;
const Image = styled.img`
  width: 300px;
  height: 300px;
`;

const EbooksContainer = styled.div`
  margin-bottom: 150px;
  padding: 0 50px;
`;

const EbookHeadline = styled.h2`
  color: #3b50a0;
  font-family: "Baloo Da 2";
`;
const EbooksLists = styled.ul`
  display: flex;
  list-style: none;
  overflow: hidden;
  padding: 0 50px;
`;
const SingleEbook = styled.li`
  margin-right: 30px;
  cursor: pointer;
`;

const TemporaryContainer = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid black;
  background: url("./images/Banner.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.3s ease;
  &:hover {
    transform: scale(0.9);
  }
`;

const Ebooks = () => {
  return (
    <Container>
      <Navbar />
      <HeroSection>
        <Left>
          <HeroSectionHeadline>
            সকল মেধার ছাত্রছাত্রীর জন্য সহজ ও সাবলীল উপস্থাপন।
          </HeroSectionHeadline>
          <Desc>
            প্রয়োজনীয় সকল ইবুকস এবং ডকুমেন্টস পড়তে পারবে সম্পূর্ণ বাংলায় এবং
            বিনামূল্যে। সকল মেধার ছাত্রছাত্রীর কথা চিন্তা করে বানানো হয়ে প্রতিটি
            লাইন।
          </Desc>
        </Left>
        <Right>
          <ImageContainer>
            <Image src="./images/Ebooks.png" />
          </ImageContainer>
        </Right>
      </HeroSection>
      <Headline>ডকুমেন্টস</Headline>
      <Topics />
      <Headline>ই-বুকস</Headline>
      <EbooksContainer>
        <EbookHeadline>প্রিমিয়াম ই-বুকসঃ</EbookHeadline>
        <EbooksLists>
          <SingleEbook>
            <TemporaryContainer></TemporaryContainer>
          </SingleEbook>
          <SingleEbook>
            <TemporaryContainer></TemporaryContainer>
          </SingleEbook>
          <SingleEbook>
            <TemporaryContainer></TemporaryContainer>
          </SingleEbook>
          <SingleEbook>
            <TemporaryContainer></TemporaryContainer>
          </SingleEbook>
        </EbooksLists>

        <EbookHeadline>ফ্রি ই-বুকসঃ</EbookHeadline>
        <EbooksLists>
          <SingleEbook>
            <TemporaryContainer></TemporaryContainer>
          </SingleEbook>
          <SingleEbook>
            <TemporaryContainer></TemporaryContainer>
          </SingleEbook>
          <SingleEbook>
            <TemporaryContainer></TemporaryContainer>
          </SingleEbook>
          <SingleEbook>
            <TemporaryContainer></TemporaryContainer>
          </SingleEbook>
          <SingleEbook>
            <TemporaryContainer></TemporaryContainer>
          </SingleEbook>
        </EbooksLists>
      </EbooksContainer>
      <Footer />
    </Container>
  );
};

export default Ebooks;
