// @flow
import React, { Component } from 'react';
import randomint from 'random-int';
import PokedexEntry from './pokedex-entry';
import './app.scss';


type Props = {};
type State = {
  loading: boolean,
  pokedexnumber: number
};

class App extends Component<Props, State> {
  state = {
    loading: true,
    pokedexnumber: randomint( 150 )
  }

  handleClick = () => {
    this.setState({
      pokedexnumber: randomint( 150 )
    });
  }

  handleOnLoadingChange = ( loading: boolean ) => {
    this.setState({ loading });
  }

  render() {
    return (
      <section>
        <header>
          {"Jay Jay's Pokedex"}
        </header>

        <div id="app">
          <PokedexEntry
            id={this.state.pokedexnumber}
            onLoadingChange={this.handleOnLoadingChange}
          />
          <button
            onClick={this.handleClick}
            disabled={!!this.state.loading}
          >
            {'Random'}
          </button>
        </div>
      </section>
    );
  }
}

export default App;
