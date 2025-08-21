import { PokemonResultT, PokemonT, StorePortI } from "./port";
import { getPokeListAPI, getPokemonAPI } from "./apiMethods";
import { LocalStore } from "./localStore";

export class PokeStoreProvider implements StorePortI{

  private localStore: LocalStore = new LocalStore()

  async getPokemonList(): Promise<PokemonResultT[]> {
    const result = this.localStore.getPokemonListLocal()
    if (result.length > 0) return result
    const resultAPI = await getPokeListAPI()
    this.localStore.setPokemonListLocal(resultAPI)
    return resultAPI
  }
  async getPokemon(name: string): Promise<PokemonT> {
    const result = this.localStore.getPokemonLocal(name)
    if (!!result) return result
    const resultAPI = await getPokemonAPI(name)
    this.localStore.setPokemonLocal(resultAPI)
    return resultAPI
  }
}
