// @flow

import React, { Component, Fragment } from 'react';
import { Pokedex } from 'pokeapi-js-wrapper';
import ReactLoading from 'react-loading';


type Props = {
  id: number,
  onLoadingChange: Function
};
type State = {
  loading: boolean,
  apidata: Object | null,
};


const POKEDEX_BASEURL = 'https://assets.pokemon.com/assets/cms2/img/pokedex';


class PokedexEntry extends Component<Props, State> {
  pokedex: Object

  state = {
    loading: true,
    apidata: null
  }

  constructor() {
    super();
    this.pokedex = new Pokedex();
  }

  componentDidMount() {
    this.fetchData( this.props.id );
  }

  componentDidUpdate( prevprops: Props ) {
    if( this.props.id !== prevprops.id ) {
      const loading = true;

      if( this.props.onLoadingChange ) {
        this.props.onLoadingChange( loading );
      }

      this.setState({ loading });
      this.fetchData( this.props.id );
    }
  }

  async fetchData( id: number ) {
    // @TODO clean this code up a bit...
    const basicinfo = await this.pokedex.getPokemonByName( id );
    const species = await this.pokedex.getPokemonSpeciesByName( basicinfo.name );
    const evolutionchain = await this.pokedex.resource( species.evolution_chain.url );
    const portraitimg = await this.asyncimage(
      `${POKEDEX_BASEURL}/detail/${this.intpadstart( basicinfo.id )}.png`
    );
    const spriteback = await this.asyncimage(
      basicinfo.sprites.back_default
    );
    const spritefront = await this.asyncimage(
      basicinfo.sprites.front_default
    );

    Promise
      .all([ evolutionchain ])
      .then( () => {
        const loading = false;

        if( this.props.onLoadingChange ) {
          this.props.onLoadingChange( loading );
        }

        this.setState({
          loading,
          apidata: { basicinfo, species, evolutionchain, portraitimg, spriteback, spritefront }
        })
      });
  }

  /**
   * Resolves the specified url as an image.
   * Useful when the image is intended to be
   * shown once it is completely loaded
   */
  asyncimage = ( url: string ): Promise<*> => {
    return new Promise(
      ( resolve: Function, reject: Function ) => {
        const img = new Image()
        img.src = url;
        img.onload = () => {
          resolve( <img src={img.src} alt="" /> );
        }
      }
    );
  }

  /**
   * Left-pads integer with zeroes.
   */
  intpadstart = ( num: number, length: number = 3 ) => {
    const str = String( num );
    return str.padStart( length, '0' );
  }

  render() {
    const { apidata } = this.state;

    return (
      <section className="card">
        {/* RENDER LOADING */}
        {( !apidata || this.state.loading ) && (
          <div className="loading">
            <ReactLoading
              type={'cylon'}
              color={'steelblue'}
              height={64}
              width={64}
            />
          </div>
        )}

        {/* RENDER CONTENT */}
        {( apidata && !this.state.loading ) && (
          <Fragment>
            <h1>{apidata.basicinfo.name}</h1>
            {apidata.portraitimg}
            {apidata.spriteback}
            {apidata.spritefront}
          </Fragment>
        )}
      </section>
    );
  }
}

export default PokedexEntry;