import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const addItem = (quantity: number) => {
  return {
    type: ADD_ITEM,
    payload: {
      quantity,
    },
  };
};

const deleteItem = () => {
  return {
    type: DELETE_ITEM,
  };
};

export { addItem, deleteItem };