import { ADD_COKTAIL, DELETE_COKTAIL, EDIT_COKTAIL, SET_COKTAIL } from "./actoinTypes"

export const set_cok=(payload)=>{
  return{
    type: SET_COKTAIL,
    payload: payload
}

}
export const add_cok=(coktail)=>{
    return{
        type:ADD_COKTAIL,
        payload:coktail
    }
}
export const del_cok=(coktail)=>{
    return{
        type:DELETE_COKTAIL,
        payload:coktail
    }
    
}
export const edit_cok=(coktail)=>{
    return{
        type:EDIT_COKTAIL,
        payload:coktail
    }
}