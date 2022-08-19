import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ example: 'Post Title', description: 'Post Title' })
  @IsString({ message: 'Should be a string' })
  readonly title: string;

  @ApiProperty({
    example: 'This post about something',
    description: 'Content for post',
  })
  @IsString({ message: 'Should be a string' })
  readonly content: string;

  @ApiProperty({ example: 1, description: 'User ID' })
  readonly userId: number;
}
