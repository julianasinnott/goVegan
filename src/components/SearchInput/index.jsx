import './index.css'
import { MagnifyingGlass } from "phosphor-react";

export function SearchInput({ handleSearch, handleSearchBlog }) {

  function EnterSearch(e) {
    if (!handleSearchBlog) return
    if (e.code === 'Enter') {
      handleSearchBlog()
    }    
  }

  return(
    <div className="search">
      <input onChange={(e) => handleSearch(e.target.value)}
        onKeyDown={(e)=> EnterSearch(e)}
        className="search-input"
        type="search" />
      <MagnifyingGlass onClick={handleSearchBlog}
        className="search-icon"
        color="var(--white)"
        cursor='pointer'
        size={36}
      />
    </div>
  )
}