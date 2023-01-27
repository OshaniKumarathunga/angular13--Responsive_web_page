import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { MatDialogRef } from '@angular/material/dialog';
// import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // constructor(public dialog: MatDialog) { }
  constructor() { }

  ngOnInit(): void {
  }

  // openLoginForm(){
  //   this.dialog.open(ChildComponent , {width:'500px' , height:'450px'});
  // }
}
