

export type ROLES = "admin"| "user";

export interface USER{
EMAIL : string;
PASSWORD : string;

}
export interface UserResponse{
    messages: string;
    token :string;
    ID :  number;
   ROLES : ROLES;

}