import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<h1>It works</h1>}/>
      <Route path="/games/:id" element={<h1>Games</h1>}/>

    </Routes>
  </BrowserRouter>


  );
}

export default App;
