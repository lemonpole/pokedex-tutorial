// @flow
import React, { Component } from 'react';
import { Pokedex } from 'pokeapi-js-wrapper';
import randomint from 'random-int';
import './app.scss';


type Props = {};

type State = {
  pokedexentry: Object | void
};

const POKEDEX_BASEURL = 'https://assets.pokemon.com/assets/cms2/img/pokedex';

class App extends Component<Props, State> {
  pokedex: Object

  state = {
    pokedexentry: undefined
  }

  constructor() {
    super();
    this.pokedex = new Pokedex();
  }

  async componentDidMount() {
    // let's get a random pkmn's information once
    // we're loaded into the DOM
    this.getRandomPokemon();
  }

  async getRandomPokemon() {
    const id = randomint( 150 );
    const pokedexentry = await this.pokedex.getPokemonByName( id );
    const species = await this.pokedex.getPokemonSpeciesByName( pokedexentry.name );
    const evolutionchain = await this.pokedex.resource( species.evolution_chain.url );

    console.log( pokedexentry );
    console.log( species );
    console.log( evolutionchain );
    this.setState({ pokedexentry });
  }

  intpadstart = ( num: number, length: number = 3 ) => {
    const str = String( num );
    return str.padStart( length, 0 );
  }

  handleClick = () => {
    this.getRandomPokemon();
  }

  render() {
    const { pokedexentry } = this.state;

    return (
      <section>
        <header>
          {'Jay Jay\'s Pokedex'}
        </header>

        {/* RENDER LOADING */}
        {!pokedexentry && (
          <h1>{'Loading...'}</h1>
        )}

        {/* RENDER CONTENT */}
        {pokedexentry && (
          <div id="app">
            <section className="card">
              <h1>{pokedexentry.name}</h1>
              <img
                src={`${POKEDEX_BASEURL}/detail/${this.intpadstart( pokedexentry.id )}.png`}
                alt={pokedexentry.name}
              />
              <img
                src={pokedexentry.sprites.back_default}
                alt={pokedexentry.name}
              />
              <img
                src={pokedexentry.sprites.front_default}
                alt={pokedexentry.name}
              />
            </section>
            <button onClick={this.handleClick}>
              {'Random'}
            </button>
          </div>
        )}
      </section>
    );
  }
}

export default App;
