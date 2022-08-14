import './index.css'
import './responsive.css'
import { UserCircle } from 'phosphor-react'
import { theme } from '../../utils/theme'

export function Card({item}) {
  return(
    <div className='card'>
      <img className='card__img' src={item.img} alt="" />
      <div className='card__infos'>
        <p className='card__info__title'>{item.title}</p>
        <p className='card__info__item'>{item.subtitle}</p>
        <p className='card__info__item'>{item.description}</p>
          {item.url &&
            <UserCircle
              size={50}
              className='card__info__icon'
              color={theme.colors.secundary}
              cursor="pointer"
            /> 
          }   
      </div>
    </div>
  )
}