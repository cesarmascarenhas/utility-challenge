import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import type { ButtonProps } from '@Types/button'

export default function Button({
    label,
    color,
    style,
    onPress
}: ButtonProps) {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                style,
                { backgroundColor: color }
            ]}
            onPress={() => onPress && onPress()}
        >
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        padding: 20,
        overflow: 'hidden',
        borderRadius: 20
    },
    label: {
        color: '#fff',
        fontSize: 20
    }
})