type TextFieldProps = {
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  togglePasswordVisibility?: () => void;
  showPassword?: boolean;
  type?: string;
  value?: string | number;
  name?: string;
  usernameError?: string;
  emailError?: string;
  touchedUsername?: boolean;
  touchedEmail?: boolean;
  password?: boolean;
  handleBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  background?: string;
  border_bottom?: string;
  rounded?: string;
  width?: string;
  fullNameError?: string;
  touchedFullName?: boolean;
  streetNameError?: string;
  touchedStreetName?: boolean;
  streetNumberError?: string;
  touchedStreetNumber?: boolean;
  postalCodeError?: string;
  touchedPostalCode?: boolean;
  cityError?: string;
  touchedCity?: boolean;
};

type LoginValues = {
  username: string;
  password: string;
  staySignedIn?: boolean;
};

type SignUpValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

interface FetchProps {
  url: string;
  method: string;
  body?: {
    password: string;
    username: string;
  };
}

interface SelectOptionProps {
  value?: string | number;
  name?: string;
  handleBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  filterBy: {
    title?: string;
    icon?: JSX.Element;
    options?: {
      name: string;
      quantity?: number;
      countryid?: number;
      categoryid?: number;
      optionId?: number;
    }[];
  };
  width?: string;
  bgColor?: string;
  homePath?: string;
  addDishPath?: string;
}

export {
  TextFieldProps,
  LoginValues,
  SignUpValues,
  FetchProps,
  SelectOptionProps,
};
