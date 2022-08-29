import { Check } from "phosphor-react";
import './index.css'

export function SuccessRegister({title}) {
  return(
    <div className="success-msg__register">
      <p> {title} </p>
      <Check
        className="check-icon"
        size={34}
        color="var(--secundary)"
      />
    </div>
  )
}
