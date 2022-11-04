import { Route, Routes } from "react-router-dom";
import Tree from './Tree'
import Footer from "./Footer";
import "./App.css";


const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Tree />}/>
        </Routes>
        <Footer />
    </>
  ) 
}

export default App