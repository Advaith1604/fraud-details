import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-fraud-activity-details',
  templateUrl: './fraud-activity-details.component.html',
  styleUrls: ['./fraud-activity-details.component.scss'],
   viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class FraudActivityDetailsComponent {
  @Input() fraudDetailForm = {submitted: false};
  @Input() fraudEvent = { value: ""};

  items = [1]

  handleAdd(){
    this.items.push(1)
  }
  handleDelete(i: number){
    this.items.splice(i,1)
  }
}
