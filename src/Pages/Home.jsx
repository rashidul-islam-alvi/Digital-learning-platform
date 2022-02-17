import React from "react";
import styled from "styled-components";
import HeroSection1 from "../Components/HeroSection/HeroSection1";
import HeroSection2 from "../Components/HeroSection/HeroSection2";
import Topics from "../Components/Documents/Topics";
import Navbar from "../Components/Navbar";
import TopBannner from "../Components/TopBannner";
import { HeroSectionData } from "../Data/data";
import LatestCourses from "../Components/LatestCourses/LatestCourses";
import Features from "../Components/Features/Features";
import Testimonials from "../Components/Testimonials/Testimonials";
import Footer from "../Components/Footer";
import Qualities from "../Components/Qualities/Qualities";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <HeroSection1 data={HeroSectionData[0]} />
      <Topics />
      <HeroSection2 data={HeroSectionData[1]} />
      <LatestCourses />
      <Features />
      <Qualities />
      <Testimonials />
      <Footer />
    </Container>
  );
};

export default Home;
