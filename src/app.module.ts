import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize'
import { Sequelize } from 'sequelize-typescript';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './models/user.model';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '13.215.139.119',
      username: 'rtd',
      password: 'Tiny722$',
      database: 'ariunbolor',
      models: [User],
    }),
    SequelizeModule.forFeature([User])

  ],
  controllers:[AppController, UserController],
  providers:[AppService, UserService], 
})
export class AppModule {}

