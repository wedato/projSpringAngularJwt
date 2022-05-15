export interface User  {
   id: string;
   firstName: string;
   lastName: string;
   username: string;
   email: string;
   lastLoginDateDisplay: Date;
   joinDate: Date;
   profileImageUrl: string;
   active: boolean;
   notLocked: boolean;
   role: string;
   authorities: [];
}
