import React, { useMemo } from "react";
import { PokemonT } from "../../services/store/port";

interface PokeItemProps {
  pokemon: PokemonT
}

const PokeItem = (props: PokeItemProps) => {
  const pokemon = useMemo(() => props.pokemon, [props.pokemon])
  return (
    <div>
      <div className="w-56 h-84 rounded-lg p-2 shadow-lg" style={{backgroundColor: 'rgba(200, 200, 200, 0.2)'}}>
        <div className="ps-3 pe-1 pt-2 pb-4 rounded-t-lg bg-gray-100 bg-opacity-25 flex flex-row flex-overflow items-center justify-between">
          <span className="text-lg font-bold text-gray-800 text-opacity-75">{pokemon.name}</span>
          <span className="text-sm text-gray-500">HP {pokemon.stats.hp}</span>
        </div>
        <span>
              <img
                className="-mb-1 mx-auto h-40 w-auto"
                src={pokemon.sprite}
                alt={pokemon.name}
              />
            </span>
        <div>
          <ul className="px-2 pt-1 font-mono text-sm text-gray-800">
            {
              pokemon.abilities.map((ability, index) => (
                <li key={index}>{ability}</li>
              ))
            }
          </ul>
        </div>
        <div className="mt-4 p-3 font-mono rounded-b-lg bg-gray-100 bg-opacity-25">
          <div className="flex flex-row flex-wrap justify-between gap-1 text-sm text-gray-500">
            <span>ATTK {pokemon.stats.attack}</span>
            <span>DEF {pokemon.stats.defense}</span>
            <span>SPEED {pokemon.stats.speed}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeItem;
