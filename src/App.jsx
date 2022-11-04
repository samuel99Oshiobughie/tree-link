import { Route, Routes } from "react-router-dom";
import Tree from './Tree'

import Contact from "./Contact";
import "./App.css";


const App = () => {
  return (
    <div className="body">
        <Routes>
            <Route path="/" element={<Tree />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
       
    </div>
  ) 
}

export default App