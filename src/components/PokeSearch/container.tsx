import React, { useState, ChangeEvent, useEffect, useRef } from "react";

const DEBOUNCETIME = 0.5

interface PokeSearchProps {
  onSearch: (query: string) => void
  debounceTime?: number
}

const PokeSearchContainer: React.FC<PokeSearchProps> = ({ onSearch, debounceTime }) => {
  const [query, setQuery] = useState("")

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    setQuery(query)
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(query)
    }, debounceTime || DEBOUNCETIME * 1000)

    return () => clearTimeout(timeoutId)
  }, [query, onSearch])

  return (
    <div className="mb-6 w-80 mx-auto">
      <input
        type="text"
        value={query}
        onChange={onChange}
        placeholder="Search Pokemon..."
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
      />
    </div>
  )
}

export default PokeSearchContainer
