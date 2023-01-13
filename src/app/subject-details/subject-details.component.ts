import { Component,Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.scss'],
   viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class SubjectDetailsComponent {
   @Input() fraudDetailForm = {submitted: false};

  items = [1]

  handleAdd(){
    this.items.push(1)
  }
  handleDelete(i: number){
    this.items.splice(i,1)
  }

}
