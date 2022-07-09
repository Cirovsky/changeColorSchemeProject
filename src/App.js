import React, { useState } from "react"
import {
    View,
    Text,
    Appearance,
} from 'react-native'
import Hello from "./components/Hello"
import {light, dark} from "./styles/colorSchemes"

let isDark = Appearance.getColorScheme() == 'dark'? true:false
console.log(isDark)

const styles = isDark? {...dark} : {...light}

const colors = {
    backgroundColor: isDark? 'blue': 'pink',
    color: isDark? 'pink':'blue',
}



export default () => {
    const [colorTheme, setColorTheme] = useState({ ...colors})
    
    Appearance.addChangeListener(event => {
        console.log(event.colorScheme)
        setColorTheme(
            event.colorScheme == "dark"?
            {backgroundColor: 'blue', color: 'pink'}
            : {backgroundColor: 'pink', color: 'blue'}
            )
    })
    
    return (
        <View style={[styles.container, {backgroundColor: colorTheme.backgroundColor}]}>
            <Text style={{color: colorTheme.color}}>
                {Appearance.getColorScheme()}
            </Text>
            <Hello colorTheme = {colorTheme}/>
        </View>
    )
}
