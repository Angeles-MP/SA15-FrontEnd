import { Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Destinos  from './Pages/Destinos';
import DetalleDestinos from './Pages/DetalleDestinos';
import Nosotros  from './Pages/Nosotros';
import LayoutPrincipal from './Layout/LayoutPrincipal';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPrincipal />}>
        <Route index element={<Inicio />} />
        <Route path="Destinos" element={<Destinos />} />
        <Route path="Destinos/:id" element={<DetalleDestinos />} />
        <Route path="Nosotros" element={<Nosotros />} />
      </Route>
    </Routes>
  );
}

export default App;

