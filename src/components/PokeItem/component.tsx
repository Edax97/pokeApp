import React, { useMemo } from "react";
import { PokemonT } from "../../services/store/port";

interface PokeItemProps {
  pokemon: PokemonT
}

const PokeItem = (props: PokeItemProps) => {
  const pokemon = useMemo(() => props.pokemon, [props.pokemon])
  return (
    <div>
      <div className="w-52 h-84 rounded-lg bg-green-300 p-5 shadow-lg">
        <div className="flex flex-row items-center justify-between">
          <span className="text-lg font-bold text-green-800">{pokemon.name}</span>
          <span className="text-sm text-gray-500">HP {pokemon.stats.hp}</span>
        </div>
        <span>
              <img
                className="-my-2 mx-auto h-44"
                src={pokemon.sprite}
                alt="Bulbasaur"
              />
            </span>
        <div>
          <ul className="font-mono text-sm text-gray-800">
            {
              pokemon.abilities.map((ability, index) => (
                <li key={index}>{ability}</li>
              ))
            }
          </ul>
        </div>
        <div className="mt-4 font-mono">
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
