import './index.css'

export function FoodCard({tableItem}) {
  return(
    <div className="food-card">
      <p className='food-name'>{tableItem.Descricao}</p>
      <div className="food-card__info">
        <span>Calorias: {tableItem.Energia}</span>
        <span>Carboidratos: {tableItem.CHO}</span>
        <span>Proteinas: {tableItem.Proteina}</span>
        <span>Gorduras: {tableItem.Lipideos}</span>
      </div>
    </div>
  )
}