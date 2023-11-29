import './App.css';
import { BrowserRouter, Route, Routes, useParams, Navigate } from 'react-router-dom';
import NewColor from './NewColor';
import ColorList from "./ColorList"
import { useState } from 'react';
import SingleColor from './SingleColor';

function App() {
  let initialColors = []
  
  const [colors, setColors] = useState(initialColors);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path='/colors' element={<ColorList colors={colors} />}/>
     <Route exact path='/colors/new' element={<NewColor onAddColor={addColor}/>} />
     <Route exact path='/colors/:name' element={<SingleColor colors={colors}/>} />
     <Route path="/*" element={<Navigate to="/colors" />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
