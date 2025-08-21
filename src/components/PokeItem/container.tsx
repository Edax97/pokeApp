import { useEffect, useState } from "react";
import { PokemonResultT, PokemonT } from "../../services/store/port";
import { useStoreCtx } from "../../services/store/context";
import { AbortController } from "happy-dom";
import PokeItem from "./component";

interface Props {
  result: PokemonResultT;
}

const PokeItemContainer = ({ result }: Props) => {
  const [pokemonData, setPokemonData] = useState<PokemonT | null>(null);
  const store = useStoreCtx()
  useEffect(() => {
    if (!store) return;
    console.log('Get pokemon')
    //const abort = new AbortController()
    void (async () => {
      const data = await store.getPokemon(result.name)
      setPokemonData(data)
    })()
    //return () => abort.abort()
  }, [])
  if (!pokemonData) return (<div className="mx-auto h-6 w-6 border-b-2 border-gray-800 rounded-full animate-spin"></div>)
  return (
    <PokeItem pokemon={pokemonData} />
  )
}

export default PokeItemContainer
