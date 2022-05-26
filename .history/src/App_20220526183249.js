import logo from './logo.svg';
import ReactDOM from "react-dom/client";
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
      <Route path="/home" element={<App />}/>
      <Route path="/games/:id" element={<App />}/>

    </Routes>
  </BrowserRouter>


  );
}

export default App;
