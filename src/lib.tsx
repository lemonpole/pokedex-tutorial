/**
 * Utility functions.
 *
 * @module
 */

/**
 * Pokémon sprite URLs.
 *
 * @enum
 */
export enum PokemonSpriteURL {
  ARTWORK = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{0}.png',
  GAME = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{0}.png',
}

/**
 * A simple string templating formatter.
 *
 * @param template  The template string. e.g.: "Level up using {0}."
 * @param values    An array of values to inject into the template string.
 */
export function formatString(template: string, values: string[]) {
  let out = '';

  if (values.length) {
    const args: any =
      typeof values[0] === 'string' || typeof values[0] === 'number'
        ? Array.prototype.slice.call(values)
        : values[0];
    for (const key in args) {
      out = template.replace(new RegExp('\\{' + key + '\\}', 'gi'), args[key]);
    }
  }

  return out;
}

/**
 * Gets the official artwork URL for the specified Pokémon id.
 *
 * @param id The Pokémon id.
 * @function
 */
export function getPokemonArtwork(id: number) {
  return formatString(PokemonSpriteURL.ARTWORK, [id.toString()]);
}
