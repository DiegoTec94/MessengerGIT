import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    {nick:"Nick 1" , subNick: "subNick", avatar:"avatar.png", status: "online", email:"mi@email.com", userId :1},
    {nick:"Nick 2" , subNick: "subNick", avatar:"avatar.png", status: "online", email:"mi@email.com", userId :2},
    {nick:"Nick 3" , subNick: "subNick", avatar:"avatar.png", status: "online", email:"mi@email.com", userId :3},
    {nick:"Nick 4" , subNick: "subNick", avatar:"avatar.png", status: "online", email:"mi@email.com", userId :4},
    {nick:"Nick 5" , subNick: "subNick", avatar:"avatar.png", status: "online", email:"mi@email.com", userId :5},
    {nick:"Nick 6" , subNick: "subNick", avatar:"avatar.png", status: "online", email:"mi@email.com", userId :6},
    {nick:"Nick 7" , subNick: "subNick", avatar:"avatar.png", status: "online", email:"mi@email.com", userId :7},
    {nick:"Nick 8" , subNick: "subNick", avatar:"avatar.png", status: "online", email:"mi@email.com", userId :8},
    {nick:"Nick 9" , subNick: "subNick", avatar:"avatar.png", status: "online", email:"mi@email.com", userId :9},
    {nick:"Nick 10" , subNick: "subNick", avatar:"avatar.png", status: "online", email:"mi@email.com", userId :10},
    {nick:"Nick 11" , subNick: "subNick", avatar:"avatar.png", status: "online", email:"mi@email.com", userId :11},
    {nick:"Nick 12" , subNick: "subNick", avatar:"avatar.png", status: "offline", email:"mi@email.com", userId :12},
    {nick:"Nick 13" , subNick: "subNick", avatar:"avatar.png", status: "offline", email:"mi@email.com", userId :13},
    {nick:"Nick 14" , subNick: "subNick", avatar:"avatar.png", status: "offline", email:"mi@email.com", userId :14},
    {nick:"Nick 15" , subNick: "subNick", avatar:"avatar.png", status: "offline", email:"mi@email.com", userId :15},
    {nick:"Nick 16" , subNick: "subNick", avatar:"avatar.png", status: "offline", email:"mi@email.com", userId :16},
    {nick:"Nick 17" , subNick: "subNick", avatar:"avatar.png", status: "offline", email:"mi@email.com", userId :17},
    {nick:"Nick 18" , subNick: "subNick", avatar:"avatar.png", status: "offline", email:"mi@email.com", userId :18},
    {nick:"Nick 19" , subNick: "subNick", avatar:"avatar.png", status: "offline", email:"mi@email.com", userId :19},
    {nick:"Nick 20" , subNick: "subNick", avatar:"avatar.png", status: "absent", email:"mi@email.com", userId :20},
    {nick:"Nick 21" , subNick: "subNick", avatar:"avatar.png", status: "absent", email:"mi@email.com", userId :21},
    {nick:"Nick 22" , subNick: "subNick", avatar:"avatar.png", status: "absent", email:"mi@email.com", userId :22},
    {nick:"Nick 23" , subNick: "subNick", avatar:"avatar.png", status: "absent", email:"mi@email.com", userId :23},
    {nick:"Nick 24" , subNick: "subNick", avatar:"avatar.png", status: "absent", email:"mi@email.com", userId :24},
    {nick:"Nick 25" , subNick: "subNick", avatar:"avatar.png", status: "absent", email:"mi@email.com", userId :25}
 
  ];

  constructor() { }

  getUsers(){
    return this.users;
  }
  getUsersOnline(){
    return this.users.filter((user) => {
        return user.status == "online";
    });
  }
  getUsersoffline(){
    return this.users.filter((user) => {
      return user.status == "offline";
  });
  }
  getUsersabsent(){
    return this.users.filter((user) => {
      return user.status == "absent";
  });
  }

  getUserById(UserId){
    let user = {nick:"" , subNick: "", avatar:"", status: "", email:"", userId : null};
    
    user = this.users.filter((User) => {
      return User.userId === UserId;
    })[0];

    return user;
  }
}
