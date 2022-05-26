import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Home from "./components/home/Home";

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/games/:id" element={<h1>Games</h1>}/>

    </Routes>
  </BrowserRouter>


  );
}

export default App;
