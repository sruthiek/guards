import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../shared/password-match.directive';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private service: AuthService, private toast: ToastrService, private router: Router) { }

  registerform = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmpassword: ['', Validators.required]
  }, {
    validators: passwordMatchValidator
  })

  get fullname() {
    return this.registerform.controls['fullname'];
  }

  get email() {
    return this.registerform.controls['email'];
  }

  get password() {
    return this.registerform.controls['password'];
  }
  get confirmpassword() {
    return this.registerform.controls['confirmpassword'];
  }

  SubmitDetails() {
    // console.log(this.registerform.value);
    const postdata = { ...this.registerform.value }
    delete postdata.confirmpassword;
    this.service.registeruser(postdata as User).subscribe((response:any) => {
      console.log(response);
      this.toast.success('successfully registered');
      // this.router.navigate(['login'])


    },(error:any)=>{
      this.toast.error('something went wrong')
    })
  }
}
