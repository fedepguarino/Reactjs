import { NavBar } from "./components/NavBar";


const ItemListContainer = props => <div>{props.greeting}</div>

export default function App() {
  return(
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos"/>
    </>
  )
}


