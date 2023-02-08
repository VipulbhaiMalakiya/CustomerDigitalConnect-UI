import { Role } from "./role";

export interface User {
    id?: any;
    firstName?: any;
    lastName?: any;
    username?: any;
    role: Role;
    token?: any;
}
