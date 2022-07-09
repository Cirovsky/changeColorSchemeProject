import { StyleSheet } from "react-native"

const light = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'pink',
    },
    text: {
        color: 'blue'
    }
})

const dark = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'blue',
    },
    text: {
        color: 'pink'
    }
})

export {light, dark}


