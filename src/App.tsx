// @ts-ignore
import React, {useEffect} from 'react';
// import './App.css';
import { Canvg } from './canvg/Canvg';

function App() {
  useEffect(()=>{
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const v = Canvg.fromString(ctx, '<svg width="600" height="600"><text x="50" y="50">Hello World!</text></svg>');
    v.start();
  })

  return (
    <div className="App">
      <header className="App-header">
       <canvas></canvas>
      </header>
    </div>
  );
}

export default App;
