import { Item } from "../types/dishes";

const totalPrice = (cart: Item[]) => {
  const total = cart?.reduce((total, dish) => {
    return total + dish?.totalPrice;
  }, 0);

  return total;
};

export default totalPrice;
