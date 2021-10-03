import { Ionicons } from "@expo/vector-icons";
import React, { Component } from "react";
import { Animated, Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import MenuItem from "./MenuItem";

const screenHeight = Dimensions.get("window").height;

class Menu extends Component{
    state = {
        top : new Animated.Value(screenHeight)
    };

    componentDidMount() {
        Animated.spring(this.state.top, {
            toValue : 0
        }).start();
    }

    toggleMenu = () => {
        Animated.spring(this.state.top, {
            toValue : screenHeight
        }).start();
    };

    render()
    {
        return(
            <AnimatedContainer style={{top : this.state.top}} >
                <Cover>
                    <Image source={require('../assets/background2.jpg')}/>
                    <Title>Mr.Vee</Title>
                    <Subtitle>Disigner + Code</Subtitle>
                </Cover>
                <TouchableOpacity onPress={this.toggleMenu} style={{position : "absolute", top : 120, left : "50%", marginLeft : -22, zIndex : 1}}>
                    <CloseView>
                        <Ionicons name="close" size={44} color="#546bfb" />
                    </CloseView>
                </TouchableOpacity>
                <Content>
                    {
                        items.map((value, index)=>(
                            <MenuItem 
                            key={index}
                            icon={value.icon}
                            title={value.title}
                            text={value.text}
                        />
                        ))
                    }
                </Content>
            </AnimatedContainer>
        )
    }
}

export default Menu;

const Image = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
`

const Title = styled.Text`
    z-index: 1;
    font-size: 24px;
    font-weight: 600;
    color: white;
`

const Subtitle = styled.Text`
    z-index: 1;
    font-size: 13px;
    color: rgba(255,255,255, 0.5);
    margin-top: 8px;
`

const CloseView = styled.View`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background: white;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 10px rgba(0,0,0, 0.15);
`

const Container = styled.View`
    width: 100%;
    height: 100%;
    position: absolute;
    background: white;
    z-index : 100;
`
const AnimatedContainer = Animated.createAnimatedComponent(Container)

const Cover = styled.View`
    background: black;
    height: 142px;
    justify-content: center;
    align-items: center;
`

const Content = styled.View`
    height: ${screenHeight};
    background: #f0f3f5;
    padding: 50px;
`


const items = [
    {
      icon: "ios-settings",
      title: "Account",
      text: "settings"
    },
    {
      icon: "ios-card",
      title: "Billing",
      text: "payments"
    },
    {
      icon: "ios-compass",
      title: "Learn React",
      text: "start course"
    },
    {
      icon: "ios-exit",
      title: "Log out",
      text: "see you soon!"
    }
  ];