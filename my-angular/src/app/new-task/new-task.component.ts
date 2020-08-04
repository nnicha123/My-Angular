import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../models/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {
  userId: string;
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.userId = params.userId;
    });
  }
  addTask(newTask: string) {
    this.taskService.addTask(newTask, this.userId).subscribe((res: Task) => {
      console.log(res);
      console.log(this.userId);
      this.router.navigate([`/${res._userId}/tasks`]);
    });
  }
}
