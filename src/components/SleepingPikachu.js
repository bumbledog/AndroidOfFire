import React, { Component } from 'react';
import {
    View,
    Text
  } from 'react-native';
import { Button } from 'native-base';

import styles from '../styles/basicStyle'

export default class SleepingPikachu extends Component<{}}> {
    render(){
        return(
            <View>
                <Image
                    style={styles.imageDrawer}
                    source={require('../images/sleeping-pikachu.png')}
                />
                <Button
                    style={styles.buttonDrawer}
                >
                    <Text>Poke Pikachu Awake</Text>
                </Button>
            </View>
        );
    }
}