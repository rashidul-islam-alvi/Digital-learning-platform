import React from "react";
import styled from "styled-components";
import AllCoursesComponent from "../Components/AllCoursesComponent";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import TopBannner from "../Components/TopBannner";

const Container = styled.div``;

const AllCourses = () => {
  return (
    <Container>
      <Navbar />
      <AllCoursesComponent />
      <Footer />
    </Container>
  );
};

export default AllCourses;
