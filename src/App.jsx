import React, { useMemo, useState } from 'react';
import './App.css'
const App = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);

  function onWeightChange(event) {
    setWeight(event.target.value);
  }

  function onHeightChange(event) {
    setHeight(event.target.value);
  }

  const bmi = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(1); 
  }, [weight, height]);

  const bmiCategory = useMemo(() => {
    const bmiValue = parseFloat(bmi); 
    if (bmiValue < 18.5) {
      return 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      return 'Healthy Weight';
    } else if (bmiValue >= 25.0 && bmiValue <= 29.9) {
      return 'Overweight';
    } else if (bmiValue >= 30.0) {
      return 'Obese';
    } else {
      return 'Unknown';
    }
  }, [bmi]);

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight: {weight} kg</p>
        <input
          className='input-slider'
          type='range'
          step='1'
          min='40'
          max='200'
          value={weight}
          onChange={onWeightChange}
        />
        <p className='slider-output'>Height: {height} cm</p>
        <input
          className='input-slider'
          type='range'
          min='140'
          max='220'
          value={height}
          onChange={onHeightChange}
        />
      </div>
      <div className='output-section'>
        <p>BMI: {bmi}</p>
        <p className='category'>Category: {bmiCategory}</p>
      </div>
    </main>
  );
};

export default App;
