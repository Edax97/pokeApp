import { PokemonResultT, PokemonT } from "./port";

export class LocalStore {
  private readonly POKEMON_LIST_KEY = "pokemonList";
  private readonly POKEMON_PREFIX = "pokemon_";

  getPokemonListLocal(): PokemonResultT[] {
    const storedList = localStorage.getItem(this.POKEMON_LIST_KEY)
    return storedList ? JSON.parse(storedList) : []
  }

  setPokemonListLocal(list: PokemonResultT[]): void {
    localStorage.setItem(this.POKEMON_LIST_KEY, JSON.stringify(list))
  }

  getPokemonLocal(name: string): PokemonT | null {
    const storedPokemon = localStorage.getItem(this.POKEMON_PREFIX + name);
    return storedPokemon ? JSON.parse(storedPokemon) : null
  }

  setPokemonLocal(pokemon: PokemonT): void {
    localStorage.setItem(this.POKEMON_PREFIX + pokemon.name, JSON.stringify(pokemon));
  }
}
