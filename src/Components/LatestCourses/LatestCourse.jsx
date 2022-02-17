import React from "react";
import { LatestCoursesData as Courses } from "../../Data/data";
import styled from "styled-components";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const LatestCourse = () => {
  var cardStyle = {
    width: "400px",
    height: "33vw",
  };
  var titleStyle = {
    cursor: "pointer",
  };

  var buttonStyle = {
    fontWeight: "bold",
    fontSize: "1.2rem",
  };

  const Container = styled.div`
    display: flex;
    gap: 20px;
  `;

  return (
    <Container>
      {Courses.map((course) => (
        <Card style={cardStyle}>
          <CardMedia component="img" image={course.img} alt={course.title} />
          <CardContent style={{ padding: "16px 0" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={titleStyle}
            >
              {course.title}
            </Typography>
            <Typography variant="body2">{course.desc}</Typography>
          </CardContent>
          <CardActions style={{ padding: " 0" }}>
            <Button size="large" style={buttonStyle}>
              কোর্স ফি
            </Button>
            <Button size="large" style={buttonStyle}>
              {course.price}
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default LatestCourse;
