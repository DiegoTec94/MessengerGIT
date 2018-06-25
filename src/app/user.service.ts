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
    {nick:"Nick 11" , subNick: "subNick", avatar:"avatar.png", status: "online", email:"mi@email.com", userId :11}
  ];

  constructor() { }

  getUsers(){
    return this.users;
  }

  getUserById(UserId){
    let user = {nick:"" , subNick: "", avatar:"", status: "", email:"", userId : null};
    
    user = this.users.filter((User) => {
      return User.userId === UserId;
    })[0];

    return user;
  }
}
