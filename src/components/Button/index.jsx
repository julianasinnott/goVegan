import './index.css'

export function Button ({value, color}) {
  return(
    <button
      style={{backgroundColor:color}}
      className='btn'
    >
      {value}
    </button>
  )
}