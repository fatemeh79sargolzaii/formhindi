
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Menu from './Components/Menu';
import {BrowserRouter, Route , Switch} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <div >
   <Menu />
   <Switch>
   <Route path="/" component={Home} exact/>
   <Route path="/about" component={About}/>
   <Route path="/contact" component={Contact}/>
   </Switch>
    </div>
    </BrowserRouter>
  );
}
const Home=()=>{
 return (
        <div className="HomeStyle">
         <h1>Welcome to Home Page</h1>   
        </div>
    ) 
}
export default App;
