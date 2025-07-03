import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Industries from './pages/Industries.jsx';
import Support from './pages/Support.jsx';
import Impact from './pages/Impact.jsx';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/support" element={<Support />} />
        <Route path="/impact" element={<Impact />} />
    </Routes>
  )
}

export default App