type TextFieldProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  togglePasswordVisibility?: () => void;
  showPassword?: boolean;
  type?: string;
  value?: string;
  name?: string;
  emailError?: string;
  passwordError?: string;
  touchedEmail?: boolean;
  handleBlur?: FocusEventHandler<HTMLInputElement> | undefined;
};

interface MyFormValues {
  email: string;
  password: string;
}

export { TextFieldProps, MyFormValues };
