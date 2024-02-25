import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `<span> value of message is {{message}}</span>`,
  styleUrl: './child.component.css'
})
export class ChildComponent
 {
  @Input()
  message:string="";

}
