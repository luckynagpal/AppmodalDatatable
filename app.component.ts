import { Component , OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material';

import { NewComponent } from './new/new.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'appmodal';
  constructor(private dialog:MatDialog){}
  public data : any;
  
  onCreate(): void {

    if (this.dialog.openDialogs.length>0) return;
     this.dialog.open(NewComponent, {
      width: '800px',
     height:'250px',
     data: this.data
    });
  }
  ngOnInit() {
    this.data = [{'name':'Anil',  'age' :'34', 'city':'Noida' },
    
   ]
  }
  
  }
