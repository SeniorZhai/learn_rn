/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native';

export default class LearnRN extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <ScrollView style={styles.container}>
               <Image source={require('./img/avatar.png')}></Image>
               <Image source={require('./img/avatar.png')}></Image>
               <Image source={require('./img/avatar.png')}></Image>
               <Image source={require('./img/avatar.png')}></Image>
               <Image source={require('./img/avatar.png')}></Image>
               <Image source={require('./img/avatar.png')}></Image>
               <Image source={require('./img/avatar.png')}></Image>
               <Image source={require('./img/avatar.png')}></Image>
               <Image source={require('./img/avatar.png')}></Image>
               <Image source={require('./img/avatar.png')}></Image>
               <Image source={require('./img/avatar.png')}></Image>
               <Image source={require('./img/avatar.png')}></Image>
               <Image source={require('./img/avatar.png')}></Image>
               <Image source={require('./img/avatar.png')}></Image>
               <Image source={require('./img/avatar.png')}></Image>
               <Image source={require('./img/avatar.png')}></Image>
               <Image source={require('./img/avatar.png')}></Image>
               <Image source={require('./img/avatar.png')}></Image>
               <Image source={require('./img/avatar.png')}></Image>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // 制定组件扩展到撑满剩余空间
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
        paddingTop: 30
    },
});

AppRegistry.registerComponent('LearnRN', () => LearnRN);
