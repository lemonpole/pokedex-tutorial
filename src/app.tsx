import React from 'react';
import { Pokedex } from 'pokeapi-js-wrapper'


/**
 * Instantiate pokedex api wrapper
 */

const pokedex = new Pokedex();


/**
 * The main component
 */

export default function App() {
  // set up component state
  const [ data, setData ] = React.useState<any>( null );

  // fetch the pokemon entry once
  React.useEffect( () => {
    pokedex.getPokemonByName( 1 )
      .then( res => setData( res ) )
      .catch( () => null )
    ;
  }, []);

  // render our markup
  return (
    <h1>
      {data
        ? data.name
        : 'Loading...'
      }
    </h1>
  );
}