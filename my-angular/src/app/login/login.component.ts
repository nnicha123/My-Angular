import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}
  userLogin(username: string, password: string) {
    this.taskService
      .loginUser(username, password)
      .subscribe((res: HttpResponse<any>) => {
        console.log(res);
      });
    // console.log(username, password);
  }
}
