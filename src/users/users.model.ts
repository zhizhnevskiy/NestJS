import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";

interface UserCreatingAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreatingAttrs> {

    @ApiProperty({example: 1, description: 'Unique id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'test@test.com', description: 'Email'})
    @Column({type: DataType.STRING, unique: true, allowNull: true})
    email: string;

    @ApiProperty({example: '12345', description: 'Password'})
    @Column({type: DataType.STRING, allowNull: true})
    password: string;

    @ApiProperty({example: true, description: 'Check ban'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'Bad man', description: 'Ban reason'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(()=>Role, ()=>UserRoles)
    roles: Role[];
}