
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import AddCoktail from './Components/AddCoktail';
import ListCoktail from './Components/ListCoktail';
import { set_cok } from './redux/action';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarre from './Components/NavBarre';

function App() {
  const dispatch= useDispatch()
  useEffect(() => {
   let getprod=async()=>{
     try {
       let res =await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
       dispatch(set_cok(res.data.drinks))
       console.log(res)

     } catch (error) {
       console.log(error)
     }
   }

getprod()   } ,[]);
  return (

    <div className="App">
      <NavBarre/>
      <AddCoktail/>
      <ListCoktail/>
    </div>
  );
}

export default App;
