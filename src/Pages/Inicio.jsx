import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listarDestacados } from "../services/destinoService";

export default function Inicio() {
  const [destacados, setDestacados] = useState([]);

  useEffect(() => {
    listarDestacados().then((data) => setDestacados(data));
  }, []);

  return (
    <div>
      <section className="hero-inicio">
        <h1>Bienvenido a Turismo Perú</h1>
        <p>Descubre los lugares más emblemáticos y recomendados para tu próxima aventura.</p>
      </section>

      <h2>⭐ Destinos Destacados ({destacados.length})</h2>
      <div className="grid-destinos">
        {destacados.map((destino) => (
          <div key={destino.id} className="tarjeta-destino">
            <div className="tarjeta-imagen-contenedor">
              <span className="badge-destacado">⭐ Destacado</span>
              <img 
                src={destino.imagen} 
                alt={`Vista turística de ${destino.nombre}`} 
                loading="lazy" 
                width="300" 
                height="190" 
              />
            </div>
            <div className="tarjeta-contenido">
              <span className="etiqueta-categoria">{destino.categoria}</span>
              <h3>{destino.nombre}</h3>
              <p><strong>Ubicación:</strong> {destino.ciudad}, {destino.region}</p>
              <p><strong>Entrada:</strong> S/ {destino.precioEntrada}</p>
              <Link to={`/Destinos/${destino.id}`} className="btn-detalle">
                Ver detalle
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
