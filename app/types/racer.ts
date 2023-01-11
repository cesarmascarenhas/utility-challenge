export enum STATUS {
    start,
    ended,
    idle
}

export type Racer = {
    name: string
    color: string
    weight: number
    length: number
    position?: number
    likelihood?: number
}

export type Racers = {
    racers?: Array<Racer>
}

export type Status = {
    value: string
}

export type RaceState = {
    status: STATUS
    arrived: Array<Racer>,
    percent: number
}