
import { useDispatch } from 'react-redux';
import {  add_cok } from '../redux/action';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import "./Add.css" ;
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const AddCoktail = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  const  [strDrink,setStrDrink]=React.useState('')
  const [strInstructions, setStrInstructions] = React.useState('');
 
  const  [strDrinkThumb,setStrDrinkThumb]=React.useState('')
  const dispatch = useDispatch()
const handelSubmit=(e)=>{
e.preventDefault()
let coktail=
{
strDrink:strDrink,
strInstructions:strInstructions,
strDrinkThumb:strDrinkThumb}
dispatch(add_cok(coktail))
handleClose()

}


  return(
  
  <div>
       
      
       <Button onClick={handleOpen}>Add new cocktail </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <label>Name Coktail</label>
            <input type='text' value={strDrink} onChange={(e)=>setStrDrink(e.target.value)}/>
            <label>description</label>
            <input type='text' value={strInstructions} onChange={(e)=>setStrInstructions(e.target.value)}/>
            
            <label>Image</label>
            <input type='url' value={strDrinkThumb} onChange={(e)=>setStrDrinkThumb(e.target.value)}/>
            <Button variant="contained" onClick={handelSubmit}>Add</Button>
            <Button variant="outlined" onClick={handleClose}>Close</Button>
          </Box>
        </Fade>
      </Modal>
  






  </div>)
};

export default AddCoktail;
