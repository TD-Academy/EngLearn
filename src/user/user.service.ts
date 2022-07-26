import { Body, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Observable } from "rxjs";
import { User } from "src/models/user.model";
import { isStringObject } from "util/types";

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userModel: typeof User) {

    }
    getUsers(): Promise<User[]> {
        return this.userModel.findAll()
    }

    createUser(data) {
        const newUser = new this.userModel({
            username: data.username,
            Id: data.Id,
            firstname: data.firstname,
            lastname: data.lastname,
            password: data.password,
            score: data.score
        })
        console.log(newUser)
        newUser.save()
        console.log(newUser)
        return newUser
    }

    findOne(body) {
        console.log(body)
        let user = this.userModel.findOne({
            where: {
                username: body.username
            }
        });
        if (user) return user;
    }

}

