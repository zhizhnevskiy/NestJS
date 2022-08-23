import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/users.model';
import { UserRoles } from './user-roles.model';

interface RoleCreatingAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'roles', createdAt: false, updatedAt: false })
export class Role extends Model<Role, RoleCreatingAttrs> {
  @ApiProperty({ example: 1, description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'User role' })
  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  value: string;

  @ApiProperty({ example: 'Administrator', description: 'Description role' })
  @Column({ type: DataType.STRING, allowNull: true })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
