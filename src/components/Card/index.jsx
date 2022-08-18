import './index.css'
import './responsive.css'
import { UserCircle } from 'phosphor-react'
import { theme } from '../../utils/theme'

export function Card({ item, urlImg, color, width, height }) {
  return (
    <a target='blank' href={item.urlContact}>
      <div
        className='card'
        style={{
          backgroundColor: color,
          maxWidth: width,
          height: height,
        }}
      >
        <img
          className='card__img'
          src={urlImg}
          alt=""
        />
        <div className='card__infos'>
          <p className='card__info__title'>{item.title}</p>
          <p className='card__info__item'>{item.subtitle}</p>
          <p className='card__info__item description'>{item.description}</p>
          {item.urlContact &&
            <UserCircle
              size={50}
              className='card__info__icon'
              color={theme.colors.secundary}
              cursor="pointer"
            />
          }
        </div>
      </div>
    </a>
  )
}