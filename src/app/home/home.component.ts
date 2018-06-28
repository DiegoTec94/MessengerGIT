import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserFireBaseService } from '../user-fire-base.service';
import { async } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  usersOnLine = [];
  usersOffLine = [];
  usersAbsent = [];
  usersAll = [];

  constructor(public userFireBaseService : UserFireBaseService,public userService: UserService) {

   // this.usersAll = userService.getUsers();
    //  this.usersOnLine = userFireBaseService.getUsersOnline();
    

    const stream =this.userFireBaseService.getUsers();
    stream.valueChanges().subscribe((result)=>{
     this.usersAll=result;
    });

    console.log(this.usersAll);
    this.usersOnLine =  this.userFireBaseService.getUsersOnline();
    console.log(this.usersOnLine);
    this.usersOffLine = this.userFireBaseService.getUsersoffline();
    console.log(this.usersOffLine);
    this.usersAbsent =  this.userFireBaseService.getUsersabsent();

    /*const streamdd =this.userFireBaseService.getUsersOnline();
    streamdd.on("child_added", (userOnline) => {
        this.usersOnLine.push(userOnline.val());
    });*/
   
  }
  

  ngOnInit() {
  }

}
