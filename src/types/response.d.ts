interface loginResponse {
  result: {
    id: number;
    email: string;
    username: string;
    role: string;
  };
  success?: string;
  error?: string;
}

interface signupResponse {
  success?: string;
  error?: string;
}

export { loginResponse, signupResponse };
