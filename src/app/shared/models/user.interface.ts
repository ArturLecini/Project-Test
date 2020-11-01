

export type ROLES = "admin"| "user";

export interface USER{

ID: number;
FIRSTNAME: string;
LASTNAME: string;
EMAIL: string;
PASSWORD: string;
ADRESS: string
PHONE: string;
ROLE:boolean;

}
export interface UserResponse{
 
    messages: string;
    token :any;
    status: number;
    result: any;
    responseType: 'JSON';
    ID :  number;
   ROLE : ROLES;
    
  }
