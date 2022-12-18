import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Course } from '../models/course';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  listarCursos(): Course[] {
    return [{
      _id: '1', name:'Angular', category:'front-end'
    }];    
  }
}
