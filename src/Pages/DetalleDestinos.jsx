import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { obtenerDestino } from "../services/destinoService";

export default function DetalleDestinos() {
  const { id } = useParams();
  const [destino, setDestino] = useState(null);

  useEffect(() => {
    obtenerDestino(id).then((data) => setDestino(data));
  }, [id]);

  if (!destino) {
    return <p>Cargando información del destino...</p>;
  }

  return (
    <div className="detalle-contenedor">
        <h1>{destino.nombre}</h1>
        <img 
          src={destino.imagen} 
          alt={`Fotografía principal de ${destino.nombre}`} 
          loading="lazy" 
          width="600" 
          height="400" 
        />
        <p><strong>Ciudad:</strong> {destino.ciudad} ({destino.region})</p>
        <p><strong>Categoría:</strong> {destino.categoria}</p>
        <p><strong>Descripción:</strong> {destino.descripcion}</p>
        <p><strong>Precio de entrada:</strong> S/ {destino.precioEntrada}</p>
        <p><strong>Duración de visita:</strong> {destino.duracionVisita}</p>
        <br />
        <Link to="/Destinos" className="btn-detalle">← Volver a Destinos</Link>
    </div>

  );
}
