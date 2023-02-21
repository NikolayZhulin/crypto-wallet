import React from 'react'

import { StatsItem } from './StatsItem'

const data = [
  { count: '12, 345', description: 'lorem ipsum dolor' },
  { count: '12, 345', description: 'lorem ipsum dolor' },
  { count: '12, 345', description: 'lorem ipsum dolor' },
]

export const StatsItems = () => {
  const stats = data.map((s, ind) => (
    <StatsItem key={ind} count={s.count} description={s.description} />
  ))

  return <>{stats}</>
}
