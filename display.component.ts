import { Component,OnInit} from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { DisplayModel } from './display.model';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit {
      formValue !: FormGroup;
      displaymodelObj : DisplayModel = new DisplayModel();
      api :any;
      DisplayData !:any;
      constructor(private formbuilder: FormBuilder) { }

      ngOnInit(): void {
        this.formValue=this.formbuilder.group({
          UserName:[''],
          TaskID:[''],
          TaskTitle:[''],
          DescriptionOfTask:[''],
          StatusOfTask:[''],
          Deadline:['']
                })

              
              }
              postDisplayDetails(){
                this.displaymodelObj.UserName=this.formValue.value.UserName;
                this.displaymodelObj.TaskID=this.formValue.value.TaskID;
                this.displaymodelObj.TaskTitle=this.formValue.value.TaskTitle;
                this.displaymodelObj.DescriptionOfTask=this.formValue.value.DescriptionOfTask;
                this.displaymodelObj.StatusOfTask=this.formValue.value.StatusOfTask;
                this.displaymodelObj.Deadline=this.formValue.value.Deadline;

                this.api.postTask(this.displaymodelObj)
                .subscribe((res: any)=>{
                    console.log(res)
                    alert("Task Added Successfuly");
                    let ref=document.getElementById('cancle')
                    ref?.click();
                    this.formValue.reset();
                    this.getAllTask();

                  }),
                  (                  _err: any)=>{
                    alert("Something went wrong");
                  }
                }
            getAllTask(){
              this.api.getTask()
              .subscribe((res: any)=>{
                this.DisplayData=res;
              })
            }
          deleteAllTask(row:any){
            this.api.deleteTask(row.TaskID)
            .subscribe((res:any)=>{
                alert("Task Deleted")
            })
          }
          onEdit(row:any){
            this.displaymodelObj.TaskID=row.TaskID;
            this.formValue.controls['UserName'].setValue(row.UserName);
            this.formValue.controls['TaskID'].setValue(row.TaskID);
            this.formValue.controls['TaskTitle'].setValue(row.TaskTitle);
            this.formValue.controls['DescriptionOfTask'].setValue(row.DescriptionOfTask);
            this.formValue.controls['StatusOfTask'].setValue(row.StatusOfTask);
            this.formValue.controls['Deadline'].setValue(row.Deadli);
          }
          updateDisplayDetails(){
                this.displaymodelObj.UserName=this.formValue.value.UserName;
                this.displaymodelObj.TaskID=this.formValue.value.TaskID;
                this.displaymodelObj.TaskTitle=this.formValue.value.TaskTitle;
                this.displaymodelObj.DescriptionOfTask=this.formValue.value.DescriptionOfTask;
                this.displaymodelObj.StatusOfTask=this.formValue.value.StatusOfTask;
                this.displaymodelObj.Deadline=this.formValue.value.Deadline;
          }  /* 
          
          this.api.updateTask(this.displaymodelObj,this.displaymodelObj.TaskID)   */
               /* .subscribe((res:any)=>{
                 alert("Updated Successfully");
              
                })*/
        
        }


      

