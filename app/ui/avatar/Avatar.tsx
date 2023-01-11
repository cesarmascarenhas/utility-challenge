import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { getRacerInitials } from '@Helpers/racers'
import type { AvatarProps } from '@Types/avatar'

export default function Avatar({ name, color }: AvatarProps) {
    return (
        <View style={[styles.container, { backgroundColor: color.toLowerCase() }]}>
            <Text style={styles.label}>{getRacerInitials(name)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 50,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff'
    }
})