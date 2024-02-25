import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TitlePipe } from '../title.pipe';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, TitlePipe],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit

{
  username:any="";

  imgurl : string="assets/images/welcome.jpg";

  birthdate:Date=new Date(2024,1,26);

  ngOnInit(): void
  {
   this.username=sessionStorage.getItem('username');
  }

  persons:any[]=

  [
    {name:"sachin",country:'india'},

    {name:"mac",country:'america'},

    {name:"zen",country:'france'},

    {name:"mahesh",country:'india'}
  ]

  getColor(countryname:string)
  {
    switch(countryname)
    {
      case 'India':
        return 'green';

        case 'america':
          return 'red';

          case 'france':
            return 'blue';
    }
    return "green";
  }


}
