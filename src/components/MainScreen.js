import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
} from 'react-native';
import {
    Body,
    Button,
    Container,
    Content,
    Footer,
    FooterTab,
    Icon,
    Left,
    Right,
    Title,
    Text
} from 'native-base';
import styles from '../styles/basicStyle';
import ProgressCircle from 'react-native-progress-circle' 

export default class MainScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pictureOfPikachu: null
        }
    }

    render() {
        return (
            <Container>
                <Body>
                    <View>
                        {this.state.pictureOfPickachu == null ? <Text> need a picture of pikachu here </Text> : <Text> place holder </Text>}
                        <View style={{flex: 1, flexDirection: 'row'}}>
                        <ProgressCircle
                            percent={30}
                            radius={50}
                            borderWidth={8}
                            color="#3399FF"
                            shadowColor="#999"
                            bgColor="#fff"
                        >
                        <Text style={{ fontSize: 18 }}>{'poo'}</Text>
                        </ProgressCircle>
                        <ProgressCircle
                            percent={30}
                            radius={50}
                            borderWidth={8}
                            color="#FFAE19"
                            shadowColor="#999"
                            bgColor="#fff"
                        >
                        <Text style={{ fontSize: 18 }}>{'Food'}</Text>
                        </ProgressCircle>
                        <ProgressCircle
                            percent={30}
                            radius={50}
                            borderWidth={8}
                            color="#993299"
                            shadowColor="#999"
                            bgColor="#fff"
                        >
                        <Text style={{ fontSize: 18 }}>{'Sleep'}</Text>
                        </ProgressCircle>
                        
                        </View>
                    </View>
                </Body>
                <FooterTab>
                <Button iconLeft style={styles.buttonDrawer}>
                    <Icon name='ios-nutrition'/>
                    <Text>feed Pikachu</Text>
                </Button>
                <Button iconLeft style={styles.buttonDrawer}>
                    <Icon name='md-arrow-up'/>
                    <Text>Poke Pikachu</Text>
                </Button>
                <Button iconLeft style={styles.buttonDrawer}>
                    <Icon name='ios-trash'/>
                    <Text>Poke Pikachu</Text>
                </Button>
                </FooterTab>
            </Container>
        );
    }
}
