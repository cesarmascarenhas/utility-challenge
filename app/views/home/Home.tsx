import { Alert, View } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { RacersList, Panel } from '@Components'
import { getRacers } from '@Controllers/API'
import { RaceContext } from '@Context/useRacers'
import { generateRacerWinLikelihoodCalculator, sortByLikelihood } from '@Helpers/racers'
import { STATUS } from '@Types/racer'
import type { Racer, Racers, RaceState } from '@Types/racer'

export default function Home() {

  const [arrived, setArrived] = useState<Racer>()
  const [data, setData] = useState<Racers>()
  const order = useRef<number>(0)
  const [state, setState] = useState<RaceState>({
    arrived: [],
    status: STATUS.idle,
    percent: 0
  })

  const resetState = () => {

  }

  const getFromAPI = () => {
    
    setData(undefined)
    setState({
      arrived: [],
      percent: 0,
      status: STATUS.idle
    })

    getRacers()
      .then(
        response => setData(response)
      )
      .catch(
        error => {
          Alert.alert('Ops!', error)
          console.log(error)
        }
      )
  }

  const updateData = (racer: Racer) => {
    setArrived(racer)
  }

  const startRace = () => {

    if (!data) {
      return
    }

    let race = { ...data }

    order.current = 0
    setArrived(undefined)
    setState({
      arrived: [],
      percent: 0,
      status: STATUS.start
    })

    race.racers?.forEach(
      (racer) => {
        let call = generateRacerWinLikelihoodCalculator()
        call(
          value => {
            racer.likelihood = value
            updateData(racer)
          }
        )
      }
    )

  }

  useEffect(() => {
    if (arrived) {
      let position = order.current += 1
      arrived.position = position

      setData({
        racers: [...(data?.racers ? data.racers
          .filter(racer => racer.name !== arrived.name) : []), arrived]
          .sort((a, b) => sortByLikelihood(a.likelihood, b.likelihood))
      })

      if (data?.racers) {
        setState({
          ...state,
          arrived: [...state.arrived, arrived],
          percent: position / data?.racers?.length * 100,
        })
      }
    }
  }, [arrived])

  useEffect(() => {
    getFromAPI()
  }, [])

  return (
    <RaceContext.Provider value={state}>
      <View style={{ flex: 1, width: '100%', backgroundColor: '#63023b' }}>
        <Panel
          onRefresh={getFromAPI}
          onStart={startRace}
        />
        <RacersList {...data} />
      </View>
    </RaceContext.Provider>
  )
}