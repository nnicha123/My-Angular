import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}
  registerUser(name: string, username: string, password: string) {
    this.taskService
      .registerUser(name, username, password)
      .subscribe((res: HttpResponse<any>) => {
        console.log(res);
      });
  }
}
