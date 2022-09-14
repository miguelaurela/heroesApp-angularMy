import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,
            private authService:AuthService) { }

  ngOnInit(): void {
  }
  login(){
    this.authService.login().subscribe(resp=>{
      console.log(resp);
      if (resp.id) {
        this.route.navigate(['./heroes'])
      }
    })
  }
  ingresarSinLogin(){
    this.authService.logout();
    this.route.navigate(['./heroes'])
  }
}
