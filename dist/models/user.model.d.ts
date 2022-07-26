import { Model } from 'sequelize-typescript';
export declare class User extends Model {
    username: string;
    Id: number;
    firstname: string;
    lastname: string;
    password: string;
    score: number;
}
