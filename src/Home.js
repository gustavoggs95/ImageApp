import React, { Component }  from 'react'
import { View, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

export default class Home extends Component {
    render(){
        return(
            <View>
                <Text>
                    Home!
                </Text>
                <FontAwesomeIcon icon={ faCoffee } />
            </View>
        )
    }
}