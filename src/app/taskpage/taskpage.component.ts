import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-taskpage',
  templateUrl: './taskpage.component.html',
  styleUrls: ['./taskpage.component.css']
})
export class TaskpageComponent implements OnInit {

  tasks:any = [];
  task:any;
  baseUrl = "https://localhost:5000"
  task_content:string ="";

  constructor(
    private router: Router,
    private http: HttpClient
  ){

  }

  ngOnInit(): void {
    this.getAllTasks()

  }

  getTaskById(taskId:any){
    const url = `http://localhost:5000/task/${taskId}`
    this.http.get(url).subscribe((res)=>{
      this.task = res
      console.log(this.task)
    },(error: HttpErrorResponse) => {
      console.log(error.error);
    }
    )
  }

  getAllTasks(){
    const url = `http://localhost:5000/alltasks`
    this.http.get(url).subscribe((res)=>{
      this.tasks = res
      console.log(this.tasks)
    }
    )
  }

  addTask(task_input_content){
    var headers = {'Content-Type': 'application/json'};
    const url = `http://localhost:5000/add`
    var task_content_json = JSON.stringify({"content" : task_input_content})
    this.http.post(url, task_content_json, {'headers':headers}).subscribe(
    
    );
    window.location.reload();
  }

  updateContent(taskId:any){
    // this.getTaskById(taskId)
    localStorage.setItem("task-id" , JSON.stringify(taskId))
    this.router.navigate([ 'updatepage' ])
    
  }

  deleteTask(taskId:any){  
    console.log(taskId)
    const url = `http://localhost:5000/delete/${taskId}`
    this.http.delete(url).subscribe((data)=>{
    }
    );
  }

}
