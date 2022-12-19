import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {}

  signUp(){
    if(this.signUpForm.valid){
      this.userService.signUp(this.signUpForm.value).subscribe({
        next: res => {
          this.userService.login(this.signUpForm.value).subscribe({
            next: res => {
              //salvar token (res.token) nos cookies
            }
          })

          this.userService.showMessage(res.msg)
          this.router.navigate([''])
        },
        error: error => {
          this.userService.showMessage(error.error['errors'].join(), true)
        }
      })
    }
  }
  
}
