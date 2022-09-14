import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Auth } from '../../../auth/interfaces/auth.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container {
      margin: 10px;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService,
              private route:Router) { }

  ngOnInit(): void {
  }
  get auth():Auth{
    return this.authService.auth; 
  }
  logout(){
    this.route.navigate(['./auth'])
  }
}
