
import './App.css';
import Login from './pages/Login'
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
function App() {

  return (
    <div className='App'>

      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
