import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Vegetables from './pages/Vegetables';
import Fruits from './pages/Fruits';
import Dairy from './pages/Dairy';
import Meat from './pages/Meat';
import Bakery from './pages/Bakery';
import Drinks from './pages/Drinks';
import Snacks from './pages/Snacks';
import Frozen from './pages/Frozen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category/vegetables" element={<Vegetables />} />
        <Route path="/category/fruits" element={<Fruits />} />
        <Route path="/category/dairy" element={<Dairy />} />
        <Route path="/category/meat" element={<Meat />} />
        <Route path="/category/bakery" element={<Bakery />} />
        <Route path="/category/drinks" element={<Drinks />} />
        <Route path="/category/snacks" element={<Snacks />} />
        <Route path="/category/frozen" element={<Frozen />} />
      </Routes>
    </Router>
  );
}

export default App;
