import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2'

interface SignUpForm {
  name: FormControl;
  email: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup<SignUpForm>;

  constructor(private router: Router, private loginService: LoginService) {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),

    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.loginService.signup(this.signUpForm.value.name, this.signUpForm.value.email, this.signUpForm.value.password).subscribe({
      next: () => {
        Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        }).fire({
          icon: "success",
          title: "Cadastro realizado com sucesso!"
        }).then(
          () => {
            this.router.navigate(["login"]);
          }
        )       
      },
      error: () => {
        Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        }).fire({
          icon: "error",
          title: "Falha ao realizar o seu cadastro! Tente novamente."
        });
      }
    })
  }

  navigate() {
    this.router.navigate(["login"]);
  }

}
