import './index.css'
import './responsive.css'

export function Button ({value, color, handlePageSize}) {
  return(
    <button
      onClick={handlePageSize}
      style={{backgroundColor:color}}
      className='btn__component'
    >
      {value}
    </button>
  )
}