import "./App.css";
import Home from './pages/Home';
import RecipiesPage from './pages/RecipiesPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Recipie from "./components/Recipie";


function App() {
  return <div className="App">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='recipies' element={<RecipiesPage />} />
        <Route path='/recipies/:recipiesid' element={<Recipie />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
