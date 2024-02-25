import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-combobox',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './combobox.component.html',
  styleUrl: './combobox.component.css'
})
export class ComboboxComponent {

  selectlanguage:string="";


  display()
  {
    console.log('selected language is ' + this.selectlanguage)
  }
}
