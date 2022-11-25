import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import Internet from './Components/Internet';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact="true" element={ <Login/> }/>
          <Route path='/register' exact="true" element={ <Register/> }/>
        </Routes>
        <Internet/>
      </Router>
    </div>
  );
}

export default App;
