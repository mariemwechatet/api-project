import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { edit_cok } from '../redux/action';


const EditCoktail = ({coktail}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const  [strDrink,setStrDrink]=useState(coktail.strDrink)
    console.log(strDrink)
    const  [strInstructions,setStrInstructions]=useState(coktail.strInstructions)
    const  [strDrinkThumb,setStrDrinkThumb]=useState(coktail.strDrinkThumb)
    const dispatch=useDispatch()
    const handelEdit=(e)=>{
        e.preventDefault()
        let newcoktail=
        {idDrink:coktail.idDrink,
        strDrinkThumb:strDrinkThumb,
        strInstructions:strInstructions,
        strDrink:strDrink}
    dispatch(edit_cok(newcoktail))
    handleClose()
    }
  return (
    <div>

<Button variant="primary" onClick={handleShow}>Edit
      </Button>

        <form onSubmit={handelEdit}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Cocktail</Modal.Title>
        </Modal.Header>
        
            <label>Name</label>
            <input type='text' value={strDrink} onChange={(e)=>setStrDrink(e.target.value)}/>
            <label>discrpion</label>
            <input type='text' value={strInstructions} onChange={(e)=>setStrInstructions(e.target.value)}/>
            <label>Image</label>
            <input type='url' value={strDrinkThumb} onChange={(e)=>setStrDrinkThumb(e.target.value)}/>
            
            

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelEdit} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </form>




    </div>
  )
}

export default EditCoktail