import React from "react"
import {
    View,
    Text
} from 'react-native'

export default props => {
    return (
            <View>
                <Text 
                style={[{fontSize: 30}, props.colorTheme]}
                >
                    Olá Mundo
                </Text>
            </View>
    )
}