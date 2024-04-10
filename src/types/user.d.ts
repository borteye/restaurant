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

type CheckOutInfo = {
  fullName: string;
  streetName: string;
  streetNumber: number;
  postalCode: number;
  city: string;
};

type BasicCustomerDetails = {
  id: number;
  email: string;
  username: string;
  password: string;
  role: string;
  status: string
};

export { UserDetails, CheckOutInfo, BasicCustomerDetails };
