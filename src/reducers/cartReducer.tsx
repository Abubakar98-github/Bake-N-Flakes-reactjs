import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const initialState = {
  numOfItems: 0,
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems + action.payload.quantity,
      };
    case DELETE_ITEM:
      // Update your delete logic if needed
      return {
        ...state,
        numOfItems: state.numOfItems - 1,
      };
    default:
      return state;
  }
};


 