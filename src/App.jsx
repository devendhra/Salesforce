import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Industries from './pages/Industries.jsx';
import Support from './pages/Support.jsx';
import Impact from './pages/Impact.jsx';
import Logincomp from './components/Login/Logincomp.jsx';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/support" element={<Support />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/login" element={<Logincomp />} />
    </Routes>
  )
}

export default App