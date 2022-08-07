import './index.css'
import { MagnifyingGlass } from "phosphor-react";

export function SearchInput() {
  return(
    <div className="search">
      <input className="search-input" type="search" />
      <MagnifyingGlass
        className="search-icon"
        color="var(--white)"
        size={36}
      />
    </div>
  )
}