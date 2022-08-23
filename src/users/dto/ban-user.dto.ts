import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class BanUserDto {
  @ApiProperty({ example: 1, description: 'User ID' })
  @IsNumber({}, { message: 'Should be a number' })
  readonly userId: number;

  @ApiProperty({ example: 'Bad man', description: 'Reason of ban' })
  @IsString({ message: 'Should be a string' })
  readonly banReason: string;
}
