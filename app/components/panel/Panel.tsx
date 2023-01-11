import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { Button } from '@UI'
import LottieView from 'lottie-react-native'
import idle from '@Assets/animations/idle.json'
import racing from '@Assets/animations/racing.json'

import { RaceContext } from '@Context/useRacers'
import { STATUS } from '@Types/racer'

import type { PanelProps } from '@Types/painel'

export default function Panel({ label, onRefresh, onStart }: PanelProps) {

  const context = useContext(RaceContext)

  const checkIfIsRaceIsRunning = (): boolean => {
    return context?.status == STATUS.start && context.percent < 100
  }

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <LottieView
          autoPlay
          style={{
            width: '100%',
            height: '100%',
            opacity: !checkIfIsRaceIsRunning() ? 0.5 : 1
          }}
          source={checkIfIsRaceIsRunning() ? racing : idle}
        />
      </View>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>
            {!checkIfIsRaceIsRunning() ? 'Welcome to Amazing Racers 0.0.0-alpha' : 'Racing ongoing!'}
          </Text>
          {
            !checkIfIsRaceIsRunning() && (
              <Text style={styles.description}>Touch refresh to reset racers. Touch GO! to start the race.</Text>
            )
          }
        </View>

        {
          !checkIfIsRaceIsRunning() && (
            <View style={styles.cta}>
              <Button label='Refresh Racers' color='#673ab7' onPress={onRefresh} />
              <Button label='GO!' color='#4caf50' onPress={onStart} />
            </View>
          )
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#63023b'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%'
  },
  title: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 20
  },
  description: {
    color: '#fff',
    fontSize: 20,
    opacity: 0.75,
  },
  background: {
    flex: 1,
    position: 'absolute'
  },
  cta: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  }
})