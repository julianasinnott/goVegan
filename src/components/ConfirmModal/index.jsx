import { Check, X } from "phosphor-react";
import './index.css'

export function ConfirmModal({titleModal, closeModal, confirmDeleteItem}) {

  return(
    <div className="container__confirm-modal">
      <div className="confirm-modal">
        <p className="confirm-modal__title">Excluir {titleModal}?</p>
        <div className="confirm-modal__options">
          <Check
            className="confirm-modal__options__icon"
            size={40}
            onClick={confirmDeleteItem}
            />
          <X
            className="confirm-modal__options__icon"
            size={40}
            onClick={closeModal}  
          />
        </div>
      </div>
    </div>
  )

}