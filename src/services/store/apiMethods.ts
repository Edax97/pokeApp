import { PokemonResultT, PokemonT } from "./port";

const URL: string = import.meta.env.VITE_APIURL || 'http://localhost:8000'

export async function getPokeListAPI(): Promise<PokemonResultT[]> {
  try {
    const response = await fetch(`${URL}/pokelist`)
    if (!response.ok) {
      throw new Error("Failed to fetch Pokemon list")
    }
    return await response.json()
  } catch (error) {
    console.error("GET pokelist: Error", error)
    throw error
  }
}

export async function getPokemonAPI(name: string): Promise<PokemonT> {
  try {
    const response = await fetch(`${URL}/poke/${name}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch Pokemon: ${name}`)
    }
    return await response.json()
  } catch (error) {
    console.error(`GET poke/${name}: Error`, error)
    throw error
  }
}
