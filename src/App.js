import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NabBar from './components/navBar/NabBar';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/nav" element={<NabBar/>}></Route>
      </Routes>
    </>
  );
}

export default App;
