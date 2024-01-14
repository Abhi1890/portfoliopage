import { MemoryRouter as Router,Route,Routes,Link, NavLink } from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './contact'
import "./App.css"

const App=()=>{
return (
<> <div className="">
  
  
<Router>
  <div className="bg-black text-white flex space-x-7 h-10 navba "><Link to="/">Home</Link>
  <NavLink to="/about">About</NavLink>
  <Link to="/contact">Contact Us</Link>
  </div>
<Routes>
<Route path="/" element={<Home name="ABHISHEK SINGH"/>} exact ></Route>
<Route path="about" element={<About/>}></Route>
<Route path="/contact" element={<Contact/>}></Route>

</Routes>


</Router>
</div>
</>

)

}
export default App;