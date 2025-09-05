import { IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(3, { message: 'Content at least 3 characters long' })
  content: string;
}
