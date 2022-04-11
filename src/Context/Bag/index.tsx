import React, { createContext, useState } from "react";

import { getProductByIdApi } from "../../services/api";

export const BagContext = createContext();

export const BagProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToBag = async (id: string) => {
    const product = await getProductByIdApi(id);
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
            item.totalPrice =
              parseFloat(item.totalPrice) + parseFloat(product.price);
          }
          return item;
        });
      }
    });
  };

  const removeItem = (id: string, qty: number) => {
    // if(qty < 1)
    const ItemBag = [...items];
    const newItemsBag = ItemBag.filter((item) => item.id !== id);

    setItems(newItemsBag);
  };

  function getItemsCount(): number {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }

  function getTotalPrice(): number {
    return items.reduce((sum, item) => sum + parseFloat(item.totalPrice), 0);
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
