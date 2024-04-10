type BasicFoodInfo = {
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
};

interface MenuFoodProps {
  dish: {
    name: string;
    category: string;
    price: string;
    image: string;
    description: string;
  };
}

type BasicPopularDishesInfo = {
  dishId: number;
  name: string;
  description: string;
  price: string;
  available: string;
  countryid: number;
  categoryid: number;
};

interface PopularDishesCardProps {
  dish: {
    dishid: number;
    name: string;
    description: string;
    price: string;
    available: number;
    countryid: number;
    categoryid: number;
  };
}

type BasicCategoryInfo = {
  name: string;
  categoryid: number;
};

interface CategoryCardProps {
  item?: {
    name: string;
    categoryid: number;
  };
}

type BasicCountryInfo = {
  name: string;
  countryid: number;
};

interface CountryDetails {
  filter: {
    country: string;
    countryid: number;
  };
}

interface DishDetails {
  dish: {
    dishes: {
      dishid: number;
      name: string;
      description: string;
      price: string;
      available: number;
      categoryid: number;
      countryid: number;
    }[];
  };
}

interface CartDetails {
  cart: {
    items: {
      dishid: number;
      name: string;
      quantity: number;
      price: number;
      totalPrice: number;
    }[];
  };
}

type Item = {
  dishid: number;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
};

interface CartState {
  items: Item[];
}

interface CartCardProps {
  dish: {
    dishid: number;
    name: string;
    quantity: number;
    price: number;
    totalPrice: number;
  };
}



export {
  BasicCategoryInfo,
  BasicCountryInfo,
  BasicFoodInfo,
  BasicPopularDishesInfo,
  CartCardProps,
  CartDetails,
  CartState,
  CategoryCardProps,
  CountryDetails,
  DishDetails,
  Item,
  MenuFoodProps,
  PopularDishesCardProps,

};
