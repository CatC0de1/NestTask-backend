import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  listTasks() {
    return 'List of tasks';
  }

  @Post()
  createTask(@Body() body: string) {
    return body;
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return `Task ${id}`;
  }
}
