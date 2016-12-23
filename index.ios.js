/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ListView,
    Text,
    View,
} from 'react-native';

export default class LearnRN extends Component {
    constructor(props){
        super(props);
        // 判断两行数据是否是同一个数据
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'Java','C++',"C","PHP","Ruby","SQL","JS","Object-C"
            ])
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text style={styles.text}>{rowData}</Text>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // 制定组件扩展到撑满剩余空间
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
        paddingTop: 30
    },
    text : {
        fontSize: 30
    }
});

AppRegistry.registerComponent('LearnRN', () => LearnRN);
