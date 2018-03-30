import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image
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
    Text,
} from 'native-base';
import styles from '../styles/basicStyle';
import ProgressCircle from 'react-native-progress-circle' 

export default class MainScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTime: 0,
            deadTime: 0,
            sleepTime: 0,
            hungryTime: 0,
        }
    }

    componentDidMount() {
        let date = new Date()
        let time = date.getHours();
        console.log('minutes: ', date.getMinutes())
       // console.log('time: ', time);
        this.setState({currentTime: date.getMinutes()})
        let endTime = (date.getMinutes() + 59) % 60
        console.log('endTime: ', endTime);
        this.setState({deadTime: endTime})
        this.setState({sleepTime: (date.getMinutes() + 30) % 60})
        this.setState({hungryTime: (date.getMinutes() + 10) % 60})
    }
    render() {
        return (
            <Container>
                <Body>
                    <View>
                        <Image
                            style={styles.imageDrawer}
                            source={require('../images/pikachu.jpg')}
                        />
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

    _getHungryPercent() {
        let percent = this.state.currentTime / this.state.hungryTime
        console.log('percent: ', percent);
        return percent
    }

    _getSleepPercent() {
        let percent = this.state.currentTime / this.state.sleepTime
        console.log('percent: ', percent);
        return percent
    }

    _getDeadPercent() {
        let percent = this.state.currentTime / this.state.deadTime
        console.log('percent: ', percent);
        return percent
    }
}
