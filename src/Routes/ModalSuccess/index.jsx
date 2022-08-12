import './index.css';

import iconClose from '../../assets/images/icon-close.png';
import iconOk from '../../assets/images/icon-ok.png';
import logoGoVegan from '../../assets/images/logo-go-vegan.png';

export function ModalSuccess() {
  return (
    <div className='container'>
      <div className='modal-success'>
        <div className='close-modal' >
          <div className='close-modal-icon' >
            <img className='icon__close' src={iconClose} alt="" />
          </div>
        </div>
        <div className='success__container' >
          <h1 className='title-success' >MENSAGEM ENVIADA<br /> COM SUCESSO</h1>
          <div className='background-image-ok'>
            <img className='icon-ok' src={iconOk} alt="" />
          </div>
          <h2 className='subtitle-success' >Obrigado pelo contato!</h2>
          <div className='go-vegan-container' >
            <img className='logo-go-vegan' src={logoGoVegan} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};