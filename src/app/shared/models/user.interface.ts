

export type ROLES = "admin"| "user";
export interface LOGIN{
   EMAIL: string;
   PASSWORD: string;
   }
export interface USER{

ID : number;
FIRSTNAME: string;
LASTNAME: string;
EMAIL: string;
PASSWORD: string;
ADRESS: string
PHONE: string;
ROLE:any;
CREATED:Date;
UPDATET_AT: Date;
}

export interface UserResponse{
   ID :  number; 
   message: string;
    user: string
    token :any;
    text : string;
    status: number;
    result: any;
    responseType: any;
   ROLE : any;
    
  }
