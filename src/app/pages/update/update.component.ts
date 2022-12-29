import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/services/user.service';
import { ITokenPayload } from 'src/app/models/i-token-payload'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  private userData: ITokenPayload = this.userService.decodeToken(this.userService.getCookie('token'))

  updateForm = this.formBuilder.group({
    name: [this.userData?.name, [Validators.required, Validators.minLength(3)]],
    email: [this.userData?.email, [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void { }

  update(){
    if(this.updateForm.valid){
      this.userService.update(this.updateForm.value).subscribe({
        next: res => {
          this.userService.showMessage(res.msg)
          this.userService.logout()
        },
        error: err => {
          // err.error.errors.forEach((el: any) => this.userService.showMessage(el))
          this.userService.showMessage(err.error.errors[0], true)          
        }
      })
    }else this.userService.showMessage('Preencha os campos corretamente', true)
     
  }

}
