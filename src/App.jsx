import { Route, Routes } from "react-router-dom";
import Tree from './Tree'
import Contact from "./Contact";
import "./App.css";


const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Tree />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes> 
    </>
  ) 
}

export default App