import React, { Component } from 'react';
import {
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

export default class SleepingPikachu extends Component {
    render(){
        return(
            <Container>
            <View>
                <Image
                    style={styles.imageDrawer}
                    source={require('../images/pikachu_sleeping.png')}
                />
                <Button iconLeft style={styles.buttonDrawer}>
                    <Icon name='bell-ring'/>
                    <Text>Poke Pikachu Awake</Text>
                </Button>
            </View>
            </Container>
        );
    }
}
