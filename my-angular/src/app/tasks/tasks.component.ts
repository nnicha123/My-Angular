import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  name: string;
  userId: string;
  taskAvailable: boolean;
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.userId) {
        this.taskService.getTasks(params.userId).subscribe((tasks: Task[]) => {
          this.name = localStorage.getItem('NAME');
          this.userId = params.userId;
          if (tasks) {
            this.tasks = tasks;
          } else {
            this.tasks = undefined;
          }
        });
      }
    });
  }
  userLogout() {
    localStorage.removeItem('NAME');
    this.router.navigate([`/login`]);
  }
  finish(task: Task) {
    this.taskService.finishTask(task).subscribe((res: Task) => {
      console.log(res);
    });
    window.location.reload();
  }
  incomplete(task: Task) {
    this.taskService.incompleteTask(task).subscribe((res: Task) => {
      console.log(res);
    });
    window.location.reload();
  }
  deleteTask(taskId: string) {
    this.taskService.deleteTask(this.userId, taskId).subscribe((res: Task) => {
      console.log(res);
    });
    window.location.reload();
  }
  updateTask(task: Task) {
    this.taskService.updating(task).subscribe((res: Task) => {
      console.log(res);
    });
    window.location.reload();
  }
  updateTaskTitle(task: Task, newTitle: string) {
    this.taskService.updateTaskTitle(task, newTitle).subscribe((res: Task) => {
      // console.log(res);
      console.log(res.updating);
    });
    window.location.reload();
  }
}
