import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Card from './components/Cards';
import { Ionicons } from '@expo/vector-icons'
import Logo from './components/Logo';
import { logos } from './components/LogosData';
import { cards } from './components/CardsData';
import Course from './components/Course';
import { courses } from './components/CoursesData';
import Menu from './components/Menu';

export default function App() {
  return (
    <Container >
      <Menu />
      <ScrollView style={{ height : "100%" }}>
          <StatusBar style="auto" />
          <TitleBar>
            <Avatar source={require("./assets/avatar.jpg")} />
            <Title>Welcome Back,</Title>
            <Name>Mr.V</Name>
            <Ionicons name="notifications" size={32} color="#4775f2" style={{ position : "absolute", right : 20, top : 5 }} />
          </TitleBar>
          <ScrollView 
            style={{ flexDirection : "row", 
            padding : 20, paddingLeft : 12, 
            paddingTop : 30 }} 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} >
            {
              logos.map((logo, index) => (
                <Logo key={index}
                logoImg={logo.image}
                text={logo.text}
              />
              ))
            }
          </ScrollView>
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView horizontal={true} style={{ paddingBottom : 20, paddingRight : 20 }} showsHorizontalScrollIndicator={false} >
              {
                cards.map((card, index) => (
                  <Card key={index}
                  title={card.title}
                  bgImg={card.image}
                  logo={card.logo}
                  caption={card.caption}
                  subtitle={card.subtitle}
                />
                ))
              }

          </ScrollView>
          <Subtitle>Popular Courses</Subtitle>
          {
            courses.map((course, index)=> (
              <Course
                key={index}
                avatar={course.avatar}
                title={course.title}
                subtitle={course.subtitle}
                bgImg={course.image}
                logo={course.logo}
                caption={course.caption}
                author={course.author}
              />
            ))
          }
      </ScrollView>
    </Container>
  );
}

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background-color: black;
  border-radius: 22px;
  position: absolute;
  margin-left: 20px;
  top: 0;
  left: 0;
`;

const Container = styled.View`
  flex : 1;
  background-color: #f0f3f4;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;
const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;
