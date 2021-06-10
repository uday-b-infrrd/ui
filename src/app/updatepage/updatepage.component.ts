import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-updatepage',
  templateUrl: './updatepage.component.html',
  styleUrls: ['./updatepage.component.css']
})
export class UpdatepageComponent implements OnInit {

  task_content:string
  task_id:number
  task:any
  constructor(
    private router: Router,
    private http: HttpClient, 
    // private _snackBar: MatSnackBar
  ) { 
    this.task_id = JSON.parse(localStorage.getItem("task-id"));
    
    const url = `http://localhost:5000/task/${this.task_id}`
    this.http.get(url).subscribe((res)=>{
        this.task = res
        console.log(this.task)
      },(error: HttpErrorResponse) => {
        console.log(error.error);
      })
  }

  ngOnInit(): void {
    
  }


  updateTask(content:string){
    var headers = {'Content-Type': 'application/json'};
    const url = `http://localhost:5000/update/${this.task_id}`
    var task_content_json = JSON.stringify({"content" : content})
    this.http.put(url, task_content_json, {'headers':headers}).subscribe(
    
    );
    this.router.navigate([ 'taskpage' ])
    // this.openSnackBar("successfully", "updated")
  }

  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open(message, action);
  //   this.router.navigate([ 'taskpage' ])
  // }
}
