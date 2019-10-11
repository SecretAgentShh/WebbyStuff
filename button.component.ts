import { Component} from '@angular/core';
@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
  })
  export class BComponent {
    toggle=true;
    name="what?";
    status="show";
    Isdisabled=false;
    name1="Jackie Chan";
    Disable(){
        console.log(this.name);
    }
    showHide()
    {
        this.toggle= !this.toggle;
        this.status= this.toggle ? 'show' :'hide'    }

  print()
  {
      document.getElementById("myText").innerHTML=this.name1 + " snoopy";
  }

 
  }