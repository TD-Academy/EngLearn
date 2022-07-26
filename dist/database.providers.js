"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("./models/user.model");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'mysql',
                host: '13.215.139.119',
                port: 8000,
                username: 'rtd',
                password: 'Tiny722$',
                database: 'ariunbolor',
            });
            sequelize.addModels([user_model_1.User]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map