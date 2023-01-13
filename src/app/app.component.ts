import { Component , OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MyServiceService } from './my-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  	closeResult = '';
  otherProducts = false;
   submit = false;
   fileToUpload: any[] = []
   documentList: any[] = []
condition: any;

	constructor(private modalService: NgbModal ,private api: MyServiceService) {}

   ngOnInit() {
    this.api.get('users?page=1').subscribe(res => {
  
      console.log('data response', res)
    });
  }

	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
   onSubmit(item: any) {
    console.log(item.form.value,"submit")
   
    if(item.form.status === "VALID"){
       this.api.post("/referrals" , item.form.value).subscribe(data => { 

      })
    }
   

  

   }

  handleOtherProducts() {
    this.otherProducts = true;
  }

  onChangeFraud(e: string) {
    this.otherProducts = e === 'fraudInquiry';
  }
  transactionalChange(e: string) {
    if (e === 'transactional') {
      this.otherProducts = true;
    } else {
      this.otherProducts = false;
    }
  }
  handleFileInput(event: any) {
    this.fileToUpload = event?.target?.files
  }

  handleUploadSave(){
    
    this.documentList = [...this.documentList, ...this.fileToUpload]
  }
handleDelete(i: number) {  
  this.documentList.splice(i,1)
}
 

}
