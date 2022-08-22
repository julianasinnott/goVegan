import './index.css'
import './responsive.css'
import { UserCircle } from 'phosphor-react'
import { theme } from '../../utils/theme'

export function Card({ item, color, width, height, handleClick }) {
  return (
    <div
      onClick={handleClick}
      className='card'
      style={{
        backgroundColor: color,
        maxWidth: width,
        minHeight: height,
      }}
    >
      <img
        className='card__img'
        src={item.urlToImage}
        alt=""
      />
      <div className='card__infos'>
        <p className='card__info__title'>{item.title}</p>
        <p className='card__info__item'>{item.subtitle}</p>
        <p className='card__info__item description'>{item.description}</p>
        {item.urlContact &&
          <a href={item.urlContact} target="blank">
            <UserCircle
              size={50}
              className='card__info__icon'
              color={theme.colors.secundary}
            />
          </a>
        }
      </div>
    </div>
  )
}