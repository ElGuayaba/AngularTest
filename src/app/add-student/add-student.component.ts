import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/Student';
import { Location } from '@angular/common';
import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  model = new Student('','','');
  submitted = false;
  students:Student[];
  active = true;

  constructor(private location: Location,
              private service: StudentService) {

  }

  ngOnInit() {
  //   this.students=this.service.students;
  //   this.service.getStudents().
  //   subscribe(students => this.students = students);
  }

  // newStudent(){
  //   this.model = new Student('','','');
  //   this.active = false;
  //   setTimeout(() => {this.active = true;},0);
  // }

  // onSubmit(){
  //   this.submitted = true;
  //   console.log('submit');
  //   this.service.addStudent(this.model);
  //   this.newStudent();
  // }

  // goBack(): void {
  //   this.location.back();
  // }

}
