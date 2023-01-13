import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-fraud-impact',
  templateUrl: './fraud-impact.component.html',
  styleUrls: ['./fraud-impact.component.scss'],
   viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class FraudImpactComponent {
 @Input() fraudDetailForm = {submitted: false};
 @Input() typeReport = {value : ""}
  items = [1] 

  handleAdd(){
    this.items.push(1)
  }
  handleDelete(i: number){
    this.items.splice(i,1)
  }

}
