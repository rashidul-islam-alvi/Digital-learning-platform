import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TopBannner from "../Components/TopBannner";

const Container = styled.div``;
const HeroSection = styled.div`
  display: flex;
  background: url("./images/B4.jpg");
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

const Headline = styled.h1`
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

const ImageContainer = styled.div``;
const Image = styled.img`
  width: 500px;
  height: 400px;
  border-radius: 20px;
`;

const Blogs = () => {
  return (
    <Container>
      <Navbar />
      <HeroSection>
        <Left>
          <Headline>জেনে নাও কিভাবে হল, কেন হল , কি হল, কোথায় হল !</Headline>
          <Desc>
            শুধুমাত্র শিখলেই হবে না, বাস্তবে কোথায় কিভাবে তা প্রয়োগ করবে তা
            জানার জন্য পড়ে ফেলে ক্যারিয়ার এবং ব্লগসমূহ।
          </Desc>
        </Left>
        <Right>
          <ImageContainer>
            <Image src="./images/Blogging.webp" />
          </ImageContainer>
        </Right>
      </HeroSection>
      <Footer />
    </Container>
  );
};

export default Blogs;
