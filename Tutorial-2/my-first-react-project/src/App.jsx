import './App.css';
import Card from './Components/Card';
//import HelloWorld from './Components/HelloWorld';

function App() {
  return (
  <>
  <h1>Diamond World</h1>
  <div className="main-container">
    <Card image="src\assets\images\1.jpg.jpg" name="Princess" price="$1,350" />
    <Card image="src\assets\images\2.jpg.jpg" name="Swan" price="$1,090" />,
    <Card image="src\assets\images\3.jpg.jpg" name="Collection" price="$899" />
  </div>
  </>
  );
}

export default App
