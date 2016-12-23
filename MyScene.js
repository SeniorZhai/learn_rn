import React,{Component,PropTypes}from'react'
import {View,Text,TouchableHighlight,StyleSheet} from 'react-native'
export default class MyScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Current Scene:{this.props.title}</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>enter</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>back</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // 制定组件扩展到撑满剩余空间
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 30
    },
    text: {
        fontSize: 30
    }
});