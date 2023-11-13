import './App.css';
import { Route,Routes } from 'react-router-dom';


import Navbar from './components/routes/Navbar';
import Calc from './components/routes/Calc';
import Slider from './components/routes/Slider';
import Todo from './components/routes/todo/Todo';
import Apit from './components/routes/Apit';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br /><br /><br />
      <Routes >
        
        <Route path='*' element={<><h1>404</h1></>}  />
        <Route     path='/tp1'    element={<Calc/>} />
        <Route     path='/tp2'    element={<Slider/>} />
        <Route     path='/tp3'    element={<Todo/>} />
        <Route     path='/tp4'    element={<Apit/>} />
        
      
      </Routes>
    </div>
  );
}

export default App;
