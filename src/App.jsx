import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutPrincipal from './Layout/LayoutPrincipal';
import './App.css';

// Carga diferida de páginas con React.lazy()
const Inicio = lazy(() => import('./Pages/Inicio'));
const Destinos = lazy(() => import('./Pages/Destinos'));
const DetalleDestinos = lazy(() => import('./Pages/DetalleDestinos'));
const Nosotros = lazy(() => import('./Pages/Nosotros'));

function App() {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem' }}>Cargando página...</div>}>
      <Routes>
        <Route path="/" element={<LayoutPrincipal />}>
          <Route index element={<Inicio />} />
          <Route path="Destinos" element={<Destinos />} />
          <Route path="Destinos/:id" element={<DetalleDestinos />} />
          <Route path="Nosotros" element={<Nosotros />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;