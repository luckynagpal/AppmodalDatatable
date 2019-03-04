import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';
import { AppComponent } from '../app.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
export interface DialogData {
  age: string;
  name: string;
  city:string;

}


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  displayedColumns: string[] = ['name', 'age', 'city'];
  dataSource = this.data;
  constructor(private dialogRef:MatDialogRef<AppComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
