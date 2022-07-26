import { User } from "src/models/user.model";
export declare class UserService {
    private userModel;
    constructor(userModel: typeof User);
    getUsers(): Promise<User[]>;
    createUser(data: any): User;
    findOne(body: any): Promise<User>;
}
