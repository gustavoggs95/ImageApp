import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class Home extends React.Component {

  render(){
    console.log('props: ', this.props)
    return (
      <View>
        <Text>
          Hello World!
        </Text>
        <Button
            onPress={() => {
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'Screen',
                }
              });
            }}
            title="View next screen"
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
})

