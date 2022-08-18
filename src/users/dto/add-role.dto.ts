import {IsNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class AddRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'Role for user'})
    @IsString({message: "Should be a string"})
    readonly value: string;

    @ApiProperty({example: 1, description: 'User ID'})
    @IsNumber({},{message: "Should be a naumber"})
    readonly userId: number;
}