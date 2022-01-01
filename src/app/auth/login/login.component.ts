import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username : string | undefined;
  password : string | undefined;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loginProcess(){
    if(this.username=="admin" && this.password=="assesment2021"){
      console.log("BERHASILL!!");
      alert("Login Success");

      this.router.navigate(['/employee/list']);
    }else{
      console.log("Gagal :(");
      alert("Incorrect Username or Password");
    }
  }
}
