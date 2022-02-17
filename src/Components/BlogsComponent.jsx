import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 10rem;
`;

const Title = styled.p`
  text-align: center;
  font-size: 30px;
  margin-bottom: 100px;
`;

const BlogsContainer = styled.div`
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

export default class SwipeToSlide extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
      <Container style={{ padding: "0 50px" }}>
        <Title>টেস্টিমনিয়াল</Title>
        <Slider {...settings}>
          {Data.map((testimonial) => (
            <div style={{ marginLeft: "10px" }}>
              <BlogsContainer></BlogsContainer>
            </div>
          ))}
        </Slider>
      </Container>
    );
  }
}
