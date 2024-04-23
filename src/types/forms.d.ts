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
  phoneNumberError?: string;
  touchedPhoneNumber?: boolean;
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
  phone_number: string;
  gender: string;
};

interface FetchProps {
  url: string;
  method: string;
  body?: {
    password: string;
    username: string;
  };
}

interface CustomSelectProps {
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  value?: string | number;
  width?: string;
  bgColor?: string;
  title: string;
  options: {
    name?: string;
    countryid?: number;
  }[];
}

export {
  TextFieldProps,
  LoginValues,
  SignUpValues,
  FetchProps,
  CustomSelectProps,
};
