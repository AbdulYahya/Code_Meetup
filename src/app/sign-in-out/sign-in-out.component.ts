import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-sign-in-out',
  templateUrl: './sign-in-out.component.html',
  styleUrls: ['./sign-in-out.component.css'],
  providers: [AuthenticationService]
})
export class SignInOutComponent implements OnInit {

  user;
  private isLoggedIn: Boolean;
  private userName: String;
  private uid: string;
  modalRef: BsModalRef;
  constructor(public authService: AuthenticationService, private modalService: BsModalService) {
    this.authService.user.subscribe(user =>  {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.uid = user.uid;
        console.log(this.uid);
      }
    });
  }

  // login() {
  //   this.authService.login();
  // }

  logout() {
    this.authService.logout();
  }
  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
    closeFirstModal() {
    this.modalRef.hide();
    this.modalRef = null;
  }
}
