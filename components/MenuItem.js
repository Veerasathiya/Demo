import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";

const MenuItem = (props) => (
    <Container>
        <IconView>
            <Ionicons name={props.icon} size={24} color="#456bfb" />
        </IconView>
        <Content>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </Content>
    </Container>
);

export default MenuItem;

const Container = styled.View`
    flex-direction: row;
    margin: 15px 0;
`

const IconView = styled.View`
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
`

const Content = styled.View`
    padding-left: 20px;
`

const Title = styled.Text`
    font-size: 24px;
    font-weight: 600;
    color: #3c4560;
`

const Text = styled.Text`
    font-weight: 600;
    color: #3c4560;
    opacity: 0.6;
    margin-top: 5px;
`