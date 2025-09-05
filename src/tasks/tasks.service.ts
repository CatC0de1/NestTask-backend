import { Injectable } from '@nestjs/common';
import { TasksRepository, Task } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  async findAll(): Promise<Task[]> {
    return this.tasksRepository.findAll();
  }

  async findOne(id: number): Promise<Task | undefined> {
    const task = await this.tasksRepository.findOne(id);

    return task;
  }

  async create(content: string): Promise<void> {
    return this.tasksRepository.create(content);
  }
}
