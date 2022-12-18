import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Course } from '../models/course';
import { first, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/cursos.json'

  constructor(private httpClient: HttpClient) { }

  listarCursos() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      tap(courses => console.log(courses))
    );
  }
}
