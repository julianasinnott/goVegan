import './index.css'
import './responsive.css'

export function Button ({value, color}) {
  return(
    <button
      style={{backgroundColor:color}}
      className='btn__component'
    >
      {value}
    </button>
  )
}