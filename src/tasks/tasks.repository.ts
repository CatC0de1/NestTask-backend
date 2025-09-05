import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

export interface Task {
  id: number;
  content: string;
}

@Injectable()
export class TasksRepository {
  private readonly filePath = 'tasks.json';

  async findAll(): Promise<Task[]> {
    const data = await readFile(this.filePath, 'utf-8');
    const tasks: Task[] = JSON.parse(data) as Task[];

    return tasks;
  }

  async findOne(id: number): Promise<Task | undefined> {
    const data = await readFile(this.filePath, 'utf-8');
    const tasks: Task[] = JSON.parse(data) as Task[];

    return tasks.find((task) => task.id === id);
  }

  async create(task: string): Promise<void> {
    const data = await readFile(this.filePath, 'utf-8');
    const tasks: Task[] = JSON.parse(data) as Task[];

    const newTask = {
      id: tasks[tasks.length - 1].id + 1,
      content: task,
    };

    tasks.push(newTask);

    await writeFile(this.filePath, JSON.stringify(tasks, null, 2), 'utf-8');
  }
}
