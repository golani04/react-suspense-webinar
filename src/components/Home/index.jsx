import React from 'react'
import PokemonsList from '../PokemonsList'
import Footer from '../Footer'
import Header from '../Header'
import Spinner from '../Spinner'

const Home = ({ setSelectedPokemon }) => {
  return (
    <>
      <Header>Pokémons</Header>
      <PokemonsList setSelectedPokemon={setSelectedPokemon} />
      <Footer />
    </>
  )
}

export default Home
