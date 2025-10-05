//Author: Rebekah Driver
//Description: Lab 3 - Hooks and States
//Date: October 5, 2025

import './App.css'
import data from "../data/data";
import ColorBoxesContainer from './Components/ColorBoxesContainer';

function App() {

  return (
    <>
      <ColorBoxesContainer colors={data} />
    </>
  );
}

export default App
