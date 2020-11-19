import {useState, useEffect} from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    console.log("Pokemon")
  })
  


  const getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0/")
      .then(response => response.json())
      .then(response => setPokemon(response.results))
    }

  return (
    <div className = "App">
      <button className = "btn btn-primary" onClick={getPokemon}>Fetch Pokemon</button>
      {
        pokemon.map ((p,i) => {
          return <PokemonCard
                    pokemon={p}
                    key={i}
                    />
        })
      }
    </div>
  );
}

export default App;
