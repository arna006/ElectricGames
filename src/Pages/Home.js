import React from 'react'
import GameCharacters from '../components/Frontend/GameCharacters'
import Games from '../components/Frontend/Games'
import Navbar from '../components/Frontend/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <Games />
      <GameCharacters />
    </>
  )
}

export default Home