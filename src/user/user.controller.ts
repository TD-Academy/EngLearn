import { Body, Controller, Get, HttpException, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "src/models/user.model";

type userBody = { username: string, id: number, firstname: string, lastname: string, password: string, score: number }

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) { }

    users: any[] = [];

    @Get('/users')
    getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    // @Get('/search/:username')
    // findUser(@Param('username') username:string){
    //     const user = this.userService.findOne(username);
    //     if(user) return user;
    //     else console.log('User not found')
    // }

    @Post('/findUser')
    findUser(@Body() body: userBody){
        let user= this.userService.findOne(body)
        return user;
    }

    @Post('/create')
    createUser(@Body() body: userBody) {
        let user= this.userService.createUser(body)
        return { message: 'Амжилттай бүртгэгдлээ', user }
    }
}