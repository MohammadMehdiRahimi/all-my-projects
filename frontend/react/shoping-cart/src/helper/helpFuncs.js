import { useState } from "react";

const spliter = (title) => {
  const splitTitle = title.split(" ");
  const newTitle = `${splitTitle[0]} ${splitTitle[1]}`;

  return newTitle;
};
export { spliter };

const isInCart = (state, id) => {
  const inCart = !!state.selectedItem.find((item) => item.id === id);
  const index = state.selectedItem.findIndex((item) => item.id === id);
  let quantity = 0;
  if (index === -1) {
    quantity = 0;
  } else {
    quantity = state.selectedItem[index].quantity;
  }
  return { inCart, quantity };
};
export { isInCart };
