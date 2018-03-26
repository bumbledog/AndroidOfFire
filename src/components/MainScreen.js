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

import styles from '../styles/Style';

class MainScreen extends Component {
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
                    </View>
                </Body>
                <FooterTab>
                    <Button

                    >
                        <Text>
                            Feed Pikachu
                        </Text>
                    </Button>
                    <Button

                    >
                        <Text>
                            Poke Pikachu
                        </Text>
                    </Button>
                    <Button

                    >
                        <Text>
                            Clean up Pikachu's poo
                        </Text>
                    </Button>
                </FooterTab>
            </Container>
        );
    }
}