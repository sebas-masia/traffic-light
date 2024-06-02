import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeLight, setActiveLight] = useState(null);
  const [lights, setLights] = useState(['red', 'yellow', 'green']);

  const handleLightClick = (color) => {
    setActiveLight(color);
  };

  const cycleLights = () => {
    if (activeLight === null) {
      setActiveLight(lights[0]);
    } else {
      const currentIndex = lights.indexOf(activeLight);
      const nextIndex = (currentIndex + 1) % lights.length;
      setActiveLight(lights[nextIndex]);
    }
  };

  const addPurpleLight = () => {
    if (!lights.includes('purple')) {
      setLights([...lights, 'purple']);
    }
  };

  return (
    <div className="container">
      <div className="traffic-light">
        {lights.map((color) => (
          <div
            key={color}
            className={`light ${color} ${activeLight === color ? 'active' : ''}`}
            onClick={() => handleLightClick(color)}
          ></div>
        ))}
      </div>
      <button onClick={cycleLights}>Cycle Lights</button>
      <button onClick={addPurpleLight}>Add Purple Light</button>
    </div>
  );
}

export default App;
