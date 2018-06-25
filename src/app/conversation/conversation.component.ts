import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  userId : any;
  user = {nick:"" , subNick: "", avatar:"", status: "", email:"", userId : null};
  constructor(public activateRoute: ActivatedRoute, public userService : UserService) { 

    this.userId = this.activateRoute.snapshot.params['userId'];
    this.user = this.userService.getUserById(parseInt(this.userId));

    console.log(this.user);


  }

  ngOnInit() {
  }

}
