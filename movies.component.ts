import { Component} from '@angular/core';
@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html'
  })
  export class MComponent {
      movies : any[];
      constructor(){
          this.movies=[
                    {name: 'Escape Room', releaseDate:new Date("10-10-19")},
                    {name: 'Abcd', releaseDate:new Date("11-1-09")},
                    {name: 'Bride Wars', releaseDate:new Date("1-11-19")}

          ]
      }
    }