import { PokemonResultT, PokemonT, StorePortI } from "./port";
import { getPokeListAPI, getPokemonAPI } from "./apiMethods";

export class PokeStoreProvider implements StorePortI{
  async getPokemonList(): Promise<PokemonResultT[]> {
    return getPokeListAPI()
  }
  async getPokemon(name: string): Promise<PokemonT> {
    return getPokemonAPI(name)
  }
}
