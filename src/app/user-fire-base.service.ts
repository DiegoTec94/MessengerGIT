import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { query } from '@angular/core/src/render3/query';
import { equal } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class UserFireBaseService {


    //#region Constans
    dataTableUser = 'users';
    slash ='/';

    userOnline = [];
    userOffline = [];
    userabsent = [];
    //#endregion
  
  constructor(public angularFireDatabase : AngularFireDatabase) {
 
   }

   
   getUsers(){
    return this.angularFireDatabase.list(this.dataTableUser);
  }


   getUsersOnline(){

       this.angularFireDatabase.database.ref(this.dataTableUser)
    .orderByChild("status").equalTo("online").on("child_added", (user) =>{
      this.userOnline.push(user.val());
    });

    return this.userOnline;
    
  }


  getUsersoffline(){
   
    this.angularFireDatabase.database.ref(this.dataTableUser)
    .orderByChild("status").equalTo("offline").on("child_added", (user) =>{
      this.userOffline.push(user.val());
    });

    return this.userOffline;
  }
  getUsersabsent(){
    this.angularFireDatabase.database.ref(this.dataTableUser)
    .orderByChild("status").equalTo("absent").on("child_added", (user) =>{
      this.userabsent.push(user.val());
    });

    return this.userabsent;
  }



  createUser(user){
    return this.angularFireDatabase.object(this.dataTableUser+this.slash+user.userId).set(user);
  }

}
