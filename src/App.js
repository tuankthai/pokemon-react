import {useEffect, useState} from "react"
import logo from './logo.svg';
import './App.css';
import axios from "axios"
const BASEURL = "https://pokeapi.co/api/v2"

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    async function getPokes() {
      try {

        const result = await axios.get(`${BASEURL}/pokemon`);
        console.log(result)
        const { data } = result
        setPokemons(data.results)
        
        // console.log(data)

      } catch (error) {
        console.log(error)

      }
    }
    console.log("test 16")
    getPokes();

  }, [])
  console.log(pokemons)

  const showPokemonList =  pokemons.map(pokemon => {
     return <li key={pokemon.name}>{pokemon.name}</li>
  })
  

  return (
    <div className="App">
      {showPokemonList}

    </div>
  );
}

export default App;
