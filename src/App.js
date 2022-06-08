import './App.css';
import Hooks from './components/Hooks';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UseStateDemo from './components/UseStateDemo';
import UseEffectDemo from './components/UseEffectDemo';
import UseContextDemo from './components/UseContextDemo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Hooks />}>
              <Route path='usestate' element={<UseStateDemo />} />
              <Route path='useeffect' element={<UseEffectDemo />} />
              <Route path='usecontext' element={<UseContextDemo />} />
            </Route>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
