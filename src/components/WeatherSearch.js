import React from 'react'
import { CustomTextInput } from './CustomTextInput'
import { Button, StyleSheet, View } from 'react-native'

export const WeatherSearch = () => {
    return (
        <View>
            <CustomTextInput
                placeholder="Search the weather of your city"
                numberOfLines={1}
            />
            <View style={styles.buttonWrapper}>
                <Button title="Search" onPress={() => { }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        marginTop: 20,
    },
})
