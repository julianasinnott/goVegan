import './index.css'
import './responsive.css'

export function Button ({value, color, handleClick}) {
  return(
    <button
      onClick={() => handleClick(value)}
      style={{backgroundColor:color}}
      className='btn__component'
    >
      {value}
    </button>
  )
}