interface UserDetails {
  user: {
    id: number;
    email: string;
    username: string;
    role: string;
    password?: string;
  };
  staySignedIn?: boolean;
}

export { UserDetails };
