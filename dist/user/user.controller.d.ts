import { UserService } from "./user.service";
import { User } from "src/models/user.model";
declare type userBody = {
    username: string;
    id: number;
    firstname: string;
    lastname: string;
    password: string;
    score: number;
};
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    users: any[];
    getUsers(): Promise<User[]>;
    findUser(body: userBody): Promise<User>;
    createUser(body: userBody): {
        message: string;
        user: User;
    };
}
export {};
