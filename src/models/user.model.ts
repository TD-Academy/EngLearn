import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column({ primaryKey: false })
  username: string;

  @Column
  Id: number;
  @Column
  firstname: string;
  @Column
  lastname: string;
  @Column({ primaryKey: true })
  password: string;
  @Column
  score: number;
}


//GET --баазаасаа авна
//POST--бааздаа өгнө
//PUT--
//DELETE--Устгана