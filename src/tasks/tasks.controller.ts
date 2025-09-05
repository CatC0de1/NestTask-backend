import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dtos/crate-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './types/task';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  listTasks(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Post()
  createTask(@Body() body: CreateTaskDto): Promise<void> {
    return this.taskService.create(body.content);
  }

  @Get('/:id')
  async getTask(@Param('id') id: string): Promise<Task> {
    const task = await this.taskService.findOne(parseInt(id));

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }
}
