import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QuickActions = () => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.btn}>
                <Text>
                    All Item
                </Text>
            </Pressable>
            <Pressable style={styles.btn}>
                <Text>
                    Low Stock
                </Text>
            </Pressable>
            <Pressable style={styles.btn}>
                <Text>
                    Create
                </Text>
            </Pressable>
        </View>
    )
}

export default QuickActions

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f5f5f5',
        flexDirection: 'row',
        gap: 10
    },
    btn: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 50,
        padding: 8
    }
})