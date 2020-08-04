import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webReqService: WebRequestService) {}
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
}
