import { Route, Routes } from "react-router-dom";
import Tree from './Tree'
import "./App.css";


const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Tree />}/>
        </Routes>
    </>
  ) 
}

export default App