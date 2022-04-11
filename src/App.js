import "./App.css";
import Home from './pages/Home';
import RecipiesPage from './pages/RecipiesPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";


function App() {
  return <div className="App">
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipies' element={<RecipiesPage />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
