import {Injectable} from '@angular/core';
import {Student} from './Student';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable()
export class StudentService {
    students:Student[] = []
    private studentSubject = new BehaviorSubject([]);

    constructor(){
    //     this.students = [
    //         new Student('prueba','prueba','prueba')
    //     ];
    }
    
    addStudent(student:Student){
        this.students = [...this.students, student];
        this.studentSubject.next(this.students);
    }

    getStudents(): Observable<Student[]>{
        return this.studentSubject.asObservable();
    }
}