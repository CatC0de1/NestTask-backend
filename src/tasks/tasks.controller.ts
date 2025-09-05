import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dtos/crate-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  listTasks() {
    return this.taskService.findAll();
  }

  @Post()
  createTask(@Body() body: CreateTaskDto) {
    return this.taskService.create(body.content);
  }

  @Get('/:id')
  async getTask(@Param('id') id: string) {
    const task = await this.taskService.findOne(parseInt(id));

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }
}
