export interface AuthSignupParams {
    businessName: string;
    firstName: string;
    lastName: string;
    password: string;
    phoneNumber: string;
}

export interface AuthSigninParams {
  password: string;
  phoneNumber: string
}

export interface AuthVerifyPhonenumberParams {
    phoneNumber: string;
}

export interface AuthUserRoleParams {
    id: number;
    name: 'BUSINESS'
}
export interface AuthUserParams extends AuthSignupParams {
  id: number;
  email: string;
  reeachId: string;
  roles: AuthUserRoleParams[]
  
}

export interface AuthUserResponseParams {
   user: AuthUserParams;
   accessToken: string;
   tokenType: 'Bearer'
}