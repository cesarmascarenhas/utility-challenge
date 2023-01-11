import React, { createContext } from 'react'
import type { Racers, STATUS, RaceState } from '@Types/racer'


let status: RaceState | undefined;
export const RaceContext = createContext(status);