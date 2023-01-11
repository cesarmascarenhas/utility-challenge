import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { Avatar } from '@UI'
import { RaceContext } from '@Context/useRacers'

import { Racer, STATUS } from '@Types/racer'

export default function RacersCard({
    name,
    color,
    weight,
    length,
    position,
    likelihood
}: Racer) {

    const context = useContext(RaceContext)

    const getCurrentStatus = (): JSX.Element | null => {
        const arrived = context?.arrived.find(racer => racer.name == name)
        const ongoing = context?.status == STATUS.start

        if (arrived && ongoing) {
            return <Text style={[styles.propsLabel, {color: 'green', fontWeight: 'bold'}]}>Finished</Text>
        }

        if (!arrived && ongoing) {
            return <Text style={[styles.propsLabel, {color: 'blue', fontWeight: 'bold'}]}>Running</Text>
        }

        return null
    }

    return (
        <View style={styles.container}>
            <Avatar {...{ name, color }} />
            <View>
                <Text style={styles.label}>{name}</Text>
                <View style={styles.props}>
                    <Text style={styles.propsLabel}>weight: {weight} </Text>
                    <Text style={styles.propsLabel}>length: {length} </Text>
                </View>
                {
                    context?.percent == 100 && (
                        <View style={styles.props}>
                            {
                                likelihood && (<Text style={styles.propsLabel}>computed probability: {(likelihood * 100).toFixed(2)}% </Text>)}
                            {
                                position && (<Text style={styles.propsLabel}>position: {position}</Text>)
                            }
                        </View>
                    )
                }
                <View>
                    {
                        context?.status == STATUS.start && <Text style={styles.propsLabel}>status: {getCurrentStatus()}</Text>
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 6,
        padding: 5,
        alignItems: 'center',
        marginBottom: 0
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4d4d4d'
    },
    props: {
        flexDirection: 'row',
    },
    propsLabel: {
        color: '#4d4d4d'
    }
})