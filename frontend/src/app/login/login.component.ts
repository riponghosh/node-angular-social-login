import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginService:LoginService, private router: Router) { }

  ngOnInit() {
  }

  facebookLogin(){
  	this._loginService.fbLogin().then((res)=>{
  		console.log(res)
  	});
  }
}
