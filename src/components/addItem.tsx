import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
interface formData{
    name: string,
    quantity: number
}
const AddItem = () => {
    const [formData, setFormData] = useState<formData>({
        name: '',
        quantity: 0
    })

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setFormData({...formData, name: text})}
                value={formData.name}
                placeholder="Name"
                keyboardType="ascii-capable"
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => setFormData({...formData, quantity: Number(text)})}
                value={String(formData.quantity)}
                placeholder="Quantity"
                keyboardType="numeric"
            />
            <Button 
                title={'Add Item to stock'}
                onPress={() => Alert.alert('Simple Button pressed')}
                />
        </View>
    )
}

export default AddItem

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})