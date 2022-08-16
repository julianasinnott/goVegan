import './index.css'
import './responsive.css'

export function FoodCard({tableItem}) {
  return(
    <div className="food-card">
      <p className='food-card__name'>{tableItem.Descricao}</p>
      <div className="food-card__info">
        <span>Calorias: {tableItem.Energia.toFixed(1)} Kcal</span>
        <span>Carboidratos: {tableItem.CHO.toFixed(1)} g</span>
        <span>Proteinas: {tableItem.Proteina.toFixed(1)} g</span>
        <span>Gorduras: {tableItem.Lipideos.toFixed(1)} g</span>
      </div>
    </div>
  )
}