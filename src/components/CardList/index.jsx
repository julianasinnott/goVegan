import './index.css'
import './responsive.css'
import { Trash } from "phosphor-react";


export function CardList({ data, handleClick }) {
  return(
    <div className="card-list">
      <span className="card-list__item">
        {data.title}
      </span>
      <Trash
        onClick={()=> handleClick(data.id)}
        weight="bold"
        cursor="pointer"
      />
    </div>
  )
}