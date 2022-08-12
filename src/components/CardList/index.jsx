import { Trash } from "phosphor-react";
import './index.css'


export function CardList({ data }) {
  return(
    <div className="card-list">
      <span className="card-list__item">
        {data.name}
      </span>
      <Trash
      weight="bold"
      cursor="pointer"
      />
    </div>
  )
}