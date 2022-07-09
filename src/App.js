import React, { useState } from "react"
import {
    View,
    Text,
    StyleSheet,
    Appearance,
} from 'react-native'
import Hello from "./Hello"

let isDark = Appearance.getColorScheme() == 'dark'? true:false
console.log(isDark)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }    
})

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
