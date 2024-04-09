interface orderDetails {
  result: {
    userid: number;
    ordernumber: string;
    customer: string;
    status: string;
    orderdate: string;
    address: string;
    orderid: number;
    dishes: {
      dishid: number;
      name: string;
      quantity: number;
      price: number;
      totalPrice: number;
    }[];
  }[];
}

interface orderItems {
  userid: number;
  ordernumber: string;
  customer: string;
  status: string;
  orderdate: string;
  address: string;
  orderid: number;
  dishes: {
    dishid: number;
    name: string;
    quantity: number;
    price: number;
    totalPrice: number;
  }[];
}

export { orderDetails };
