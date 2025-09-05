import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dtos/crate-task.dto';

@Controller('tasks')
export class TasksController {
  @Get()
  listTasks() {
    return 'List of tasks';
  }

  @Post()
  createTask(@Body() body: CreateTaskDto) {
    return body;
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return `Task ${id}`;
  }
}
