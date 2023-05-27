import { Task, TaskRequest } from './tasks.types';

export class TasksService {
  async getTasks(): Promise<Task[]> {
    return [];
  }

  async createTask({ title, description, completed }: TaskRequest): Promise<Task> {
    return {} as Task;
  }

  async getTask(id: string): Promise<Task> {
    return {} as Task;
  }

  async updateTask(id: string, { title, description, completed }: TaskRequest): Promise<Task> {
    return {} as Task;
  }

  async deleteTask(id: string): Promise<void> {
    return;
  }
}
