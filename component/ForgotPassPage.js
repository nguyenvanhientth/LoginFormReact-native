import React, { Component } from 'react';
import {Image,Text,View,StatusBar,Navigator,} from 'react-native';
import {StackNavigator,} from 'react-navigation';


class ForgotPassPage extends Component {
   
    componentWillMount() {
    }
   static navigationOptions = {
    title: 'Forgot Password',
     };
 
  render() {
    return (
        <View style={{flex: 1, backgroundColor: '#3399cc', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 32,}}> HIEN NGUYEN </Text>
            <Image
            style={{width: 350, height: 350}}
            source={{uri: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'}}
            />
        </View>
    );
  }
}
module.exports = ForgotPassPage;