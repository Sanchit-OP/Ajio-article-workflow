import { Route, Routes } from 'react-router-dom';
import Buyer from './components/buyer';
import Catalog from './components/catalogteam';
import Mdm from './components/mdm';
import Home from './pages/home';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/buyerlogin' element={<Buyer />} />
      <Route path='/Cataloglogin' element={<Catalog />} />
      <Route path='/Mdmlogin' element={<Mdm />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;
