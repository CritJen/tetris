import { useState } from 'react'

import { randomTetromino } from '../tetrominos'

export const usePlayer = () => {
  //destructuing out the two things returned my useState which are the player and a setter  
  //set initial state by sending it into useState
  const [player, setPlayer] = useState({
    pos: {x: 0, y: 0},
    tetromino: randomTetromino().shape,
    collided: false
  })

  return [player];
}