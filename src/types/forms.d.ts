type TextFieldProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  togglePasswordVisibility?: () => void;
  showPassword?: boolean;
  type?: string;
  value?: string;
  name?: string;
  usernameError?: string;
  emailError?: string;
  touchedUsername?: boolean;
  touchedEmail?: boolean;
  password?: boolean;
  handleBlur?: FocusEventHandler<HTMLInputElement> | undefined;
};

interface LoginValues {
  username: string;
  password: string;
  staySignedIn?: boolean;
}

interface SignUpValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FetchProps {
  url: string;
  method: string;
  body?: {
    password: string;
    username: string;
  };
}

export { TextFieldProps, LoginValues, SignUpValues, FetchProps };
