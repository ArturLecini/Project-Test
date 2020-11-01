

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
    text : string;
    status: number;
    result: any;
    responseType: any;
    ID :  number;
   ROLE : ROLES;
    
  }
