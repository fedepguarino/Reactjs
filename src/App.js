import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";


const ItemListContainer = props => <div>{props.greeting}</div>

export default function App() {
  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route 
          path="/" 
          element={<ItemListContainer greeting="Productos"/>}
          />
        <Route 
          path="/category/:id" 
          element={<ItemListContainer greeting="Productos"/>}
          />
      </Routes>      
    </BrowserRouter>
  )
}


