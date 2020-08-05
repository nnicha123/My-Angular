import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from './models/task.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(
    private webReqService: WebRequestService,
    private router: Router
  ) {}
  createTask(title: string, userId: string) {
    return this.webReqService.post(`${userId}/tasks`, { title });
  }
  getUsers() {
    return this.webReqService.get(`users`);
  }
  getTasks(userId: string) {
    return this.webReqService.get(`${userId}/tasks`);
  }
  loginUser(username: string, password: string) {
    return this.webReqService.post('users/login', { username, password });
  }
  registerUser(name: string, username: string, password: string) {
    return this.webReqService.post('users/register', {
      name,
      username,
      password,
    });
  }
  finishTask(task: Task) {
    console.log(`${task._userId}/tasks/${task._id}`);
    return this.webReqService.put(`${task._userId}/tasks/${task._id}`, {
      completed: !task.completed,
    });
  }
  incompleteTask(task: Task) {
    console.log(`${task._userId}/tasks/${task._id}`);
    return this.webReqService.put(`${task._userId}/tasks/${task._id}`, {
      completed: !task.completed,
    });
  }
  updating(task: Task) {
    return this.webReqService.put(`${task._userId}/tasks/${task._id}`, {
      updating: !task.updating,
    });
  }
  updateTaskTitle(task: Task, newTitle: string) {
    return this.webReqService.put(`${task._userId}/tasks/${task._id}`, {
      title: newTitle,
      completed: false,
      updating: false,
    });
  }
  addTask(title: string, userId: string) {
    console.log(`${userId}/tasks`);
    return this.webReqService.post(`${userId}/tasks`, {
      title: title,
    });
  }
  deleteTask(userId: string, taskId: string) {
    console.log(`${userId}/tasks/${taskId}`);
    return this.webReqService.delete(`${userId}/tasks/${taskId}`);
  }
}
