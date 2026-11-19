import { NavLink } from "react-router-dom";

export default function Menu() {
  function claseactiva({ isActive, isPending }) {
    return isPending ? "pending" : isActive ? "active" : "";
  }

  return (
    <nav>
      <NavLink to="/" className={claseactiva}>Inicio</NavLink>
      <NavLink to="/Nosotros" className={claseactiva}>Nosotros</NavLink>
      <NavLink to="/Destinos" className={claseactiva}>Destinos</NavLink>
    </nav>
  );
}