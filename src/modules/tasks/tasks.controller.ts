import { Body, Controller, Delete, Get, Patch, Path, Post, Route, Security, Tags } from 'tsoa';
import { TasksService } from './tasks.service';
import { Task, TaskRequest } from './tasks.types';

@Route('/tasks')
@Tags('Tasks')
export class TasksController extends Controller {
  private tasksService: TasksService;

  constructor() {
    super();
    this.tasksService = new TasksService();
  }

  @Security('jwt', ['tasks:read'])
  @Get()
  async getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

  @Security('jwt', ['tasks:write'])
  @Post()
  async createTask(@Body() { title, description }: TaskRequest): Promise<Task> {
    return this.tasksService.createTask({ title, description });
  }

  @Security('jwt', ['tasks:read'])
  @Get('{id}')
  async getTask(@Path() id: string): Promise<Task> {
    return this.tasksService.getTask(id);
  }

  @Security('jwt', ['tasks:write'])
  @Patch('{id}')
  async updateTask(@Path() id: string, @Body() { title, description, completed }: TaskRequest): Promise<Task> {
    return this.tasksService.updateTask(id, { title, description, completed });
  }

  @Security('jwt', ['tasks:write'])
  @Delete('{id}')
  async deleteTask(@Path() id: string): Promise<void> {
    return this.tasksService.deleteTask(id);
  }
}
