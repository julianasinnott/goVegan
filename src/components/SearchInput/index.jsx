import './index.css'
import './responsive.css'
import { MagnifyingGlass } from "phosphor-react";

export function SearchInput({ handleSearch }) {
  return(
    <div className="search">
      <input onChange={(e) => handleSearch(e.target.value)}
        className="search-input"
        type="search" />
      <MagnifyingGlass
        className="search-icon"
        color="var(--white)"
        size={36}
      />
    </div>
  )
}