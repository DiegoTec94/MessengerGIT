import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string;
  email:string;
  emailUser :string ;
  passUser :string ;
  repeatPassUser :string;

  constructor(public router: Router,public authenticationService: AuthenticationService) {
    

   }

  ngOnInit() {
  }

  Login (){
      console.log(this.emailUser+" "+this.passUser)
    const promise = this.authenticationService.Login(this.emailUser,this.passUser);
    promise.then((data) =>{
      alert("SE VERIFICO!");
      console.log(data);
      this.router.navigateByUrl("/Home");
    }).catch((error)=>{
      alert("Valio Riel");
      console.log(error);
    });

    this.emailUser="";
    this.passUser="";
  }
  
}
