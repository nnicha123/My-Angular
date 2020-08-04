import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  name: string;
  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {}
  userLogin(username: string, password: string) {
    this.taskService.loginUser(username, password).subscribe((res: Login) => {
      console.log(res);
      this.name = res.name;
      localStorage.setItem('NAME', this.name);
      this.router.navigate([`/${res.id}/tasks`]);
    });
    // console.log(username, password);
  }
}
