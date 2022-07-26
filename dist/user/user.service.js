"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("../models/user.model");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    getUsers() {
        return this.userModel.findAll();
    }
    createUser(data) {
        const newUser = new this.userModel({
            username: data.username,
            Id: data.Id,
            firstname: data.firstname,
            lastname: data.lastname,
            password: data.password,
            score: data.score
        });
        console.log(newUser);
        newUser.save();
        console.log(newUser);
        return newUser;
    }
    findOne(body) {
        console.log(body);
        let user = this.userModel.findOne({
            where: {
                username: body.username
            }
        });
        if (user)
            return user;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map