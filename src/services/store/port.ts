export type PokemonResultT = {
  url: string
  name: string
}

export type PokemonT = {
  name: string
  abilities: string[]
  sprite: string
  stats: {
    hp: number
    attack: number
    defense: number
    special_attack: number
    special_defense: number
    speed: number
  }
}

export interface StorePortI {
  getPokemon(name: string): Promise<PokemonT>
  getPokemonList(): Promise<PokemonResultT[]>
}

