import React, { createContext, useState } from "react";

import { getProductById } from "../../services/mocks";

export const BagContext = createContext();

export const BagProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToBag = (id) => {
    const product = getProductById(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id == id);
      if (!item) {
        return [
          ...prevItems,
          {
            id,
            qty: 1,
            product,
            totalPrice: product.price,
          },
        ];
      } else {
        return prevItems.map((item) => {
          if (item.id == id) {
            item.qty++;
            item.totalPrice += product.price;
          }
          return item;
        });
      }
    });
  };

  const removeItem = (id, qty) => {
    // if(qty < 1)
    const ItemBag = [...items];
    const newItemsBag = ItemBag.filter((item) => item.id !== id);

    setItems(newItemsBag);
  };

  function getItemsCount() {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }

  function getTotalPrice() {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  return (
    <BagContext.Provider
      value={{
        items,
        setItems,
        getItemsCount,
        addItemToBag,
        getTotalPrice,
        removeItem,
      }}
    >
      {props.children}
    </BagContext.Provider>
  );
};
