import './App.css'
import Resorts from "./Components/Resorts"

function App() {
  return (
    <>
    <h1 className="main-header">Resorts Lite</h1>
    <hr className="line-break"></hr>
    <div className="main-container">
      <Resorts image="src\assets\images\1.jpg" location="Indonesia" resortName="Gili Air Hotel" rating="4.8 ★" price="$589/night" higherRating = {true} />
      <Resorts image="src\assets\images\2.jpg" location="Seychelles" resortName="Hilton Resort" rating="4.2 ★" price="$629/night" higherRating = {true} />
      <Resorts image="src\assets\images\3.jpg" location="US Virgin Islands" resortName="Goa Resort" rating="3.5 ★" price="$485/night" lowerRating = {true} />
      <Resorts image="src\assets\images\4.jpg" location="Bahamas" resortName="Kuredu Resort" rating="4.1 ★" price="$729/night" higherRating = {true} />
      <Resorts image="src\assets\images\5.jpg" location="Mauritius" resortName="Trou D'eau Douce" rating="4.9 ★" price="$877/night" higherRating = {true} />
      <Resorts image="src\assets\images\6.jpg" location="Bermuda" resortName="Staniel Cay Hotel" rating="3.2 ★" price="$365/night" lowerRating = {true} />
    </div>
    </>
  );
  
}

export default App
