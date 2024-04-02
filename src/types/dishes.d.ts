interface FoodDetails {
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

interface PopularDishesCardProps {
  data: {
    dishId: number;
    name: string;
    description: string;
    price: string;
    available: string;
    countryid: number;
    categoryid: number;
  }[];
}

type Category = {
  name: string;
  categoryid: number;
};

interface CategoryCardProps {
  data?: {
    name: string;
    categoryid: number;
  }[];
}

type Countries = {
  name: string;
  countryid: number;
};

type Country = {
  country: string;
  countryid: number;
};

interface CountryDetails {
  filter;
}

interface DishInfo {
  dish: {
    dishid: number;
    name: string;
    description: string;
    price: string;
    available: number;
    categoryid: number;
    countryid: number;
  };
}

export {
  FoodDetails,
  DishDetails,
  PopularDishesCardProps,
  Category,
  CategoryCardProps,
  Countries,
  Country,
  DishInfo,
};
