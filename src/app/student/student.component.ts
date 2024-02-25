import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  students:any[]=[{rno:1,name:'punam'},{rno:2,name:'pratiksha'}];

  a:any=10;

  constructor()
  {
    this.a='java';
  }
}
