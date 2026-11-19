import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listarDestinos } from "../services/destinoService";

export default function Destinos() {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    listarDestinos().
    then((data) => setDestinos(data));
  }, []);

  return (
    <div className="grid-destinos">
    {destinos.map((destino) => (
        <div key={destino.id} className="tarjeta-destino">
        <img src={destino.imagen} alt={destino.nombre} />
        <div className="tarjeta-contenido">
            <h2>{destino.nombre}</h2>
            <p><strong>Ubicación:</strong> {destino.ciudad}, {destino.region}</p>
            <p><strong>Categoría:</strong> {destino.categoria}</p>
            <p><strong>Entrada:</strong> S/ {destino.precioEntrada}</p>
            <Link to={`/Destinos/${destino.id}`} className="btn-detalle">
            Ver información completa
            </Link>
        </div>
        </div>
        ))}
    </div>

  );
}

