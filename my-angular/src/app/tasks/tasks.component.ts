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
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.userId) {
        this.taskService.getTasks(params.userId).subscribe((tasks: Task[]) => {
          this.tasks = tasks;
          this.name = localStorage.getItem('NAME');
        });
      } else {
        this.tasks = undefined;
        console.log("Task doesn't exist");
      }
    });
  }
  userLogout() {
    localStorage.removeItem('NAME');
    this.router.navigate([`/login`]);
  }
}
