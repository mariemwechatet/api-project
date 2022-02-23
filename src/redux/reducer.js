import { ADD_COKTAIL, DELETE_COKTAIL, EDIT_COKTAIL, SET_COKTAIL } from "./actoinTypes";

const initstate =
{
    coktail: []
}
export const reducer = (state = initstate, { type, payload }) => {

    switch (type) {
        case SET_COKTAIL:
            return {
                ...state, coktail: payload

            }
        case ADD_COKTAIL:
            return {
                ...state, coktail: [...state.coktail, payload]
            }
        case DELETE_COKTAIL:
            return {
                ...state, coktail:
                    state.coktail.filter((el) => el.idDrink !== payload)

            }
        case EDIT_COKTAIL:
            return {
                ...state, coktail:

                    state.coktail.map((el => el.idDrink == payload.idDrink ? payload : el))
            }

        default:
            return state;
    }
}