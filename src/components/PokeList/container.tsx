import React, { useEffect, useState } from 'react'
import { PokemonResultT } from "../../services/store/port";
import { useStoreCtx } from "../../services/store/context";
import PokeSearchContainer from "../PokeSearch/container";
import PokeList from './component';

const PokeListContainer = () => {
  const store = useStoreCtx()
  const [ pokemonList, setPokemonList ] = useState<PokemonResultT[]>([])
  const [ pokemonFiltered, setPokemonFiltered ] = useState<PokemonResultT[]>([])
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!store) return
    //const abort = new AbortController()
    void (async () => {
        try {
          const data = await store.getPokemonList()
          setPokemonList(data)
        } catch (e) {
          console.log('Error getting pokemon list')
        }
      }
    )()
    //return () => abort.abort()
  }, [])

  useEffect(() => {
    setPokemonFiltered(pokemonList)
  }, [pokemonList])

  useEffect(() => {
    const filtered = pokemonList.filter(p =>
      p.name.includes(searchQuery)
    );
    setPokemonFiltered(filtered);
  }, [searchQuery, pokemonList]);

  const onSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  }

  if (pokemonList.length === 0) return (<div className="mx-auto h-12 w-12 border-b-2 border-gray-800 rounded-full animate-spin"></div>)
  return (
    <div>
      <PokeSearchContainer onSearch={onSearch}/>
      <PokeList list={pokemonFiltered}/>
    </div>
      )
}

export default PokeListContainer
