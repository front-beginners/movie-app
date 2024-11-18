export interface IntervalAwardMinMax {
  producer: string
  interval: number
  previousWin: number
  followingWin: number
}

export interface IntervalAward {
  max: IntervalAwardMinMax[]
  min: IntervalAwardMinMax[]
}
