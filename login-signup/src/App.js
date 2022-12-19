
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
       <h1>Hello world...</h1>
       <div style={{border:"1px solid red", width:"100%", height:"70px"}} className="App">
          <Navbar/>
       </div>
    </div>
    
  );
}

export default App;
