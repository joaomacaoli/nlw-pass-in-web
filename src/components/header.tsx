import NWLUnitIcon from "../assets/nlw-unit-icon.svg";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={NWLUnitIcon} alt="icon" />

      <nav className="flex items-center gap-5">
        <NavLink>
          Eventos
        </NavLink>
        <NavLink>
          Participantes
        </NavLink>
      </nav>
    </div>
  )
}
