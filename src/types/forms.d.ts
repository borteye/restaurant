type TextFieldProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  togglePasswordVisibility?: () => void;
  showPassword?: boolean;
  type?: string;
  value?: string;
  name?: string;
  usernameError?: string;
  touchedUsername?: boolean;
  password?: boolean;
  handleBlur?: FocusEventHandler<HTMLInputElement> | undefined;
};

interface MyFormValues {
  username: string;
  password: string;
}

export interface FetchProps {
  url: string;
  method: string;
  body?: {
    password?: string;
    username?: string;
  };
}

export { TextFieldProps, MyFormValues, FetchProps };
