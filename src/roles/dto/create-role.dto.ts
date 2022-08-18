import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreateRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'Create new role'})
    @IsString({message: "Should be a string"})
    readonly value: string;

    @ApiProperty({example: 'Administrator', description: 'Description for new role'})
    @IsString({message: "Should be a string"})
    readonly description: string;
}