import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import React, { useContext, useEffect } from 'react'
import RacersCard from '@Components/racers/RacersCard'
import LottieView from 'lottie-react-native'
import loading from '@Assets/animations/loading.json'
import { RaceContext } from '@Context/useRacers'


import { Racers, STATUS } from '@Types/racer'

const { width } = Dimensions.get('screen')

const RacersHeader = ({ total }: any) => {

    const context = useContext(RaceContext)

    return (
        <View style={styles.headerCotainer}>
            {
                (context?.status == STATUS.start && context.percent < 100) && (
                    <View style={[styles.progress, { width: `${context.percent}%` }]} />
                )
            }
            <View style={styles.header}>
                {
                    context?.status == STATUS.start ? (
                        <Text>
                            {
                                context.percent}% Competitors Arrived - {context.percent < 100 ? 'On Going' : 'Finished'
                            }
                        </Text>
                    ) : (
                        <Text>{total} Competitors Ready</Text>
                    )
                }

            </View>
        </View>
    )
}

export default function Race({ racers }: Racers) {
    return (
        <View style={styles.container}>
            {
                racers ? (
                    <FlatList
                        contentContainerStyle={{ flexGrow: 1, width, }}
                        data={racers}
                        renderItem={({ item }) => <RacersCard {...{ ...item }} />}
                        stickyHeaderIndices={[0]}
                        ListHeaderComponent={<RacersHeader total={racers.length} />}
                    />
                ) : (
                    <LottieView
                        autoPlay
                        style={{
                            width: 100,
                            height: 100,
                        }}
                        source={loading}
                    />
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        flex: 1,
        flexGrow: 1,
        width,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#fff'
    },
    headerCotainer: {
        backgroundColor: '#eee',
    },
    header: {
        margin: 0,
        padding: 20
    },
    progress: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#8bc34a'
    }
})