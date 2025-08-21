import React, { FC, useEffect, useState } from "react";
import { PokemonResultT } from "../../services/store/port";
import PokeItemContainer from "../PokeItem/container";

const PAGESIZE = 20;

interface PokeListProps {
  list: PokemonResultT[]
}
const PokeList: FC<PokeListProps> = ({list}) => {
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(PAGESIZE)
  const [numPages, setNumPages] = useState(0)
  const [pageList, setPageList] = useState<PokemonResultT[]>([])

  useEffect(() => {
    setNumPages(Math.ceil(list.length / size))
  }, [list, size]);

  useEffect(() => {
    const offset = (page - 1) * size
    setPageList(list.slice(offset, offset+size))
  }, [page, size, list]);

  const prevPage = () => {
    if (page === 1) return
    setPage(page - 1)
  }
  const nextPage = () => {
    if (page === numPages) return
    setPage(page + 1)
  }

  return (
    <div>
      <ul className="flex flex-row flex-wrap gap-6">
        {pageList.map((p) => (
          <li key={p.name}>
            <PokeItemContainer result={p} />
          </li>
        ) )}
      </ul>
      <div className="mt-6 flex flex-row justify-center gap-4">
        <button className="text-gray-500" disabled={page == 1} onClick={prevPage}>Prev</button>
        <span>{page}/{numPages}</span>
        <button className="text-gray-500" disabled={page == numPages} onClick={nextPage}>Next</button>
      </div>
    </div>

  );
};

export default PokeList;
