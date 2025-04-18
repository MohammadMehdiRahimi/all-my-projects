import React, { useReducer, createContext } from "react";
/* --------------------------------- Reducer -------------------------------- */
const initialState = {
  selectedItem: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
};
/* --------------------------------- context -------------------------------- */
export const CartContext = createContext();
/* --------------------------------- output --------------------------------- */
export default function CartContextProvider({ children }) {
  /* -------------------- Manage number of products in cart ------------------- */
  /* ------ Start calculate number of products and calculate total price ----- */

  const sumItems = (items) => {
    if (items.length === 0) {
      return { itemCounter: 0, total: 0 };
    } else {
      const itemCounter = items.reduce(
        (total, product) => total + product.quantity,
        0
      );
      const total = items
        .reduce((total, product) => total + product.quantity * product.price, 0)
        .toFixed(2);
      return { itemCounter, total };
    }
  };
  const initialSum = sumItems(initialState.selectedItem); // محاسبه اولیه تعداد محصولات و قیمت کل

  /* ------ End calculate number of products and calculate total price ----- */
  /* ------ Start Button actions ----- */
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        if (!state.selectedItem.find((item) => item.id === action.payload.id)) {
          state.selectedItem.push({ ...action.payload, quantity: 1 });
        }
        return {
          ...state,
          selectedItem: [...state.selectedItem],
          ...sumItems(state.selectedItem),
          checkout: false,
        };
      case "REMOVE_ITEM":
        const newSelectedItem = state.selectedItem.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          selectedItem: [...newSelectedItem],
          ...sumItems(state.selectedItem),
        };
      // case "INCREASE":
      //   const indexI = state.selectedItem.findIndex(
      //     (item) => item.id === action.payload.id
      //   );
      //   console.log(state.itemCounter, state.selectedItem[indexI].quantity);
      //   if (state.selectedItem.find((item) => item.id === action.payload.id)) {
      //     const updatedItems = [...state.selectedItem];
      //     updatedItems[indexI] = {
      //       ...updatedItems[indexI],
      //       quantity: updatedItems[indexI].quantity + 1,
      //     };
      //     return {
      //       ...state,
      //       selectedItem: updatedItems,
      //       ...sumItems(state.selectedItem),
      //     };
      //   }
      case "INCREASE":
        const indexI = state.selectedItem.findIndex(
          (item) => item.id === action.payload.id
        );

        if (state.selectedItem.find((item) => item.id === action.payload.id)) {
          const updatedItems = [...state.selectedItem];
          updatedItems[indexI] = {
            ...updatedItems[indexI],
            quantity: updatedItems[indexI].quantity + 1,
          };

          return {
            ...state,
            selectedItem: updatedItems,
            ...sumItems(updatedItems),
          };
        }
        break;
      case "DECREASE":
        // check exist item
        if (state.selectedItem.find((item) => item.id === action.payload.id)) {
          const indexD = state.selectedItem.findIndex(
            (item) => item.id === action.payload.id
          );
          const DupdatedItems = [...state.selectedItem];
          DupdatedItems[indexD] = {
            ...DupdatedItems[indexD],
            quantity: DupdatedItems[indexD].quantity - 1,
          };

          return {
            ...state,
            selectedItem: [...DupdatedItems],
            ...sumItems(DupdatedItems),
          };
        }
        break;
      case "CHECK_OUT":
        return {
          selectedItem: [],
          itemCounter: 0,
          total: 0,
          checkout: true,
        };
      case "CLEAR":
        return {
          selectedItem: [],
          itemCounter: 0,
          total: 0,
          checkout: false,
        };
      default:
        return state;
    }
  };
  // const [state, dispatch] = useReducer(cartReducer, initialState);
  const [state, dispatch] = useReducer(cartReducer, {
    ...initialState,
    ...initialSum,
  });

  /* ------------ End Button actions ---------------- */

  return (
    <div>
      <CartContext.Provider value={{ state, dispatch }}>
        {children}
      </CartContext.Provider>
    </div>
  );
}
