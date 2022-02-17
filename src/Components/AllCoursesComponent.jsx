import React from "react";
import { useState } from "react";
import styled from "styled-components";
import "../App.css";

const Container = styled.div``;
const HeroSection = styled.div`
  display: flex;
  background: url("./images/B2.jpg");
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
  color: #3Option;
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
  width: 400px;
  height: 400px;
  border-radius: 50%;
`;

const AllCoursesSection = styled.div`
  padding: 0 50px;
  margin: 40px 0;
`;
const NavBarSection = styled.div`
  display: flex;
  align-items: center;
`;

const ListsContainer = styled.div`
  flex: 1;
`;
const Lists = styled.ul`
  display: flex;
  list-style: none;
  color: black;
  margin: 0;
  padding: 0;
`;
const List = styled.li`
  margin-right: 10px;
  cursor: pointer;
  text-align: center;
  width: 120px;
  &:hover {
    color: tomato;
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  width: 200px;
  height: 40px;
  border: 1px solid #3b50a0;
  align-items: center;
  border-radius: 5px;
  margin-right: 10px;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  background: none;
  font-size: 20px;
  padding: 10px;
  width: 150px;
`;

const FilterOptionsContainer = styled.div`
  flex: 1;
  display: flex;
`;

const LevelSelect = styled.select`
  min-width: 200px;
  line-height: 35px;
  border: 1px solid #3b50a0;
  box-sizing: border-box;
  border-radius: 5px;
  font-weight: 500;
  font-size: 20px;
  color: grey;
  cursor: pointer;
  outline: none;
  padding: 5px 40px 0 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  margin-right: 10px;
`;

const Option = styled.option``;

const AllCoursesComponent = () => {
  const contents = ["সকল-কোর্স", "পোগ্রামিং", "ওয়েব ডেভ"];
  const [value, setValue] = useState(0);
  return (
    <Container>
      <HeroSection>
        <Left>
          <Headline>
            সফল পোগ্রামার অথবা ফুলস্ট্যাক ডেভেলপার, হতে পারবেন ঘরে বসেই।
          </Headline>
          <Desc>
            স্মার্ট মেনটর দ্বারা সকল কোর্স তৈরী করা হয়েছে সকল মেধার ছাত্রছাত্রীর
            জন্য। সাথে রয়েছে ক্যারিয়ার রোডম্যাপ তৈরী করার স্মার্টপ্ল্যান, কোর্স
            শেষ করে নিজের রোডম্যাপ নিজেই তৈরী করার সক্ষমতা।
          </Desc>
        </Left>
        <Right>
          <ImageContainer>
            <Image src="./images/Programmer.png" />
          </ImageContainer>
        </Right>
      </HeroSection>

      <AllCoursesSection>
        <NavBarSection>
          <ListsContainer>
            <Lists>
              {contents.map((content, index) => (
                <List
                  key={index}
                  onClick={() => {
                    setValue(index);
                  }}
                  style={{ fontSize: "20px" }}
                  className={`${index === value && "listActive"}`}
                >
                  {content}
                </List>
              ))}
            </Lists>
          </ListsContainer>

          <FilterOptionsContainer>
            <SearchBarContainer>
              <SearchInput
                placeholder="কোর্স খুঁজো
            "
              />
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: "#3b50a0" }}
              ></i>
            </SearchBarContainer>
            <LevelSelect name="filter-courses" id="guided-course-filter">
              <Option value="">সকল লেভেল</Option>
              <Option value="Science">বেসিক</Option>
              <Option value="BusinessStudies">ইন্টারমিডিয়েট</Option>
              <Option value="Humanities">এডভান্স</Option>
            </LevelSelect>

            <LevelSelect name="filter-courses" id="guided-course-filter">
              <Option value="">সকল টপিক</Option>
              <Option value="Science">সি</Option>
              <Option value="BusinessStudies">সি++</Option>
              <Option value="Humanities">জাভা</Option>
              <Option value="Humanities">পাইথন</Option>
              <Option value="Humanities">জাভাস্ক্রিপ্ট</Option>
              <Option value="Humanities">ডার্ট</Option>
            </LevelSelect>
          </FilterOptionsContainer>
        </NavBarSection>
      </AllCoursesSection>
    </Container>
  );
};

export default AllCoursesComponent;
