import "./App.css";
import Home from './pages/Home';
import RecipiesPage from './pages/RecipiesPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipies' element={<RecipiesPage />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
