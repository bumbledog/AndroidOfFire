import React, { Component } from 'react';
import {
    View,
    Text
  } from 'react-native';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';
import styles from '../styles/basicStyle'

export default class SleepingPikachu extends Component<{}}> {
    render(){
        return(
            <Container>
            <View>
                <Image
                    style={styles.imageDrawer}
                    source={require('../images/sleeping-pikachu.png')}
                />
                <Button iconLeft style={styles.buttonDrawer}>
                    <Icon name='bell-ring'>
                    <Text>Poke Pikachu Awake</Text>
                </Button>
            </View>
            </Container>
        );
    }
}
