declare module "pokeapi-js-wrapper" {
  export class Pokedex {
    getPokemonByName( id: number ): Promise<any>;
  }
}