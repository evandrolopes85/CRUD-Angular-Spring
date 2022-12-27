import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Course } from '../../models/course';
import { CoursesService } from '../../sevices/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {


  cursos$: Observable<Course[]>;
 

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private rotaAtual: ActivatedRoute
    ) { 

    this.cursos$ = this.coursesService.listarCursos().pipe(
      catchError(error => {
       this.onError('Erro ao carregar cursos.')
        return of([])
      })
    );
  }

  onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  
  ngOnInit(): void { }

  public adicionarCurso(){
    this.router.navigate(['new'], {relativeTo: this.rotaAtual});
  }

  public editarCurso(curso: Course){
    this.router.navigate(['edit', curso._id], {relativeTo: this.rotaAtual});

  }
}
