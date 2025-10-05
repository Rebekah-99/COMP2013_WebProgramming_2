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
