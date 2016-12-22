/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class LearnRN extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.item}/>
                    <View style={styles.item}/>
                    <View style={styles.item}/>
                </View>
                <View style={styles.justifyConetnt_end}>
                    <View style={styles.item}/>
                    <View style={styles.item}/>
                    <View style={styles.item}/>
                </View>
                <View style={styles.justifyConetnt_around}>
                    <View style={styles.item}/>
                    <View style={styles.item}/>
                    <View style={styles.item}/>
                </View>
                <View style={styles.justifyConetnt_between}>
                    <View style={styles.item}/>
                    <View style={styles.item}/>
                    <View style={styles.item}/>
                </View>

            </View>
        );
    }
}

/*
 *  flexDirection 决定主轴方向 row→ row-reverse← column↓ column-reverse↑
 *  justifyContent 主轴排列方式 flex-start center flex-end space-around平均居中 space-between分开居中
 *  alignItems 次轴(与主轴垂直)排列方式 flex-start起始位置 flex-end终止位置 center居中 stretch展开
 */

const styles = StyleSheet.create({
    container: {
        flex: 1, // 制定组件扩展到撑满剩余空间
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
        paddingTop: 30
    },
    row: {
        backgroundColor: '#030303',
        height: 60,
        margin: 10,
        flexDirection: 'row'
    },

    justifyConetnt_end: {
        backgroundColor: '#030303',
        height: 60,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    justifyConetnt_around: {
        backgroundColor: '#030303',
        height: 60,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    justifyConetnt_between: {
        backgroundColor: '#030303',
        height: 60,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item: {
        backgroundColor: 'red',
        height: 20,
        margin: 5,
        width: 20
    }
});

AppRegistry.registerComponent('LearnRN', () => LearnRN);
