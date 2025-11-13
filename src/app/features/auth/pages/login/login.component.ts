import {Component, inject, OnInit} from '@angular/core';
import {Divider} from "primeng/divider";
import {FloatLabel} from 'primeng/floatlabel';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {InputText} from 'primeng/inputtext';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RequiredMarkDirective} from '../../../../shared/directives/required-mark.directive';
import {Button} from 'primeng/button';
import {AuthService} from '../../service/auth.service';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {Password} from 'primeng/password';
import {DeviceConfigService} from '../../../../shared/services/device-config.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    Divider,
    FloatLabel,
    InputGroup,
    InputGroupAddon,
    InputText,
    ReactiveFormsModule,
    RequiredMarkDirective,
    Button,
    ToastModule,
    Password
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent implements OnInit {

  private  fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly messageService = inject(MessageService);
  protected readonly deviceConfigService = inject(DeviceConfigService);
  private readonly router = inject(Router);

  form!: FormGroup;
  isUser: boolean = false;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  submitForm(){
    this.isUser = this.authService.findUser(this.form.value);

    if(this.isUser){
      this.messageService.add({
        severity: 'success',
        summary: 'موفقیت',
        detail: 'شما با موققیت وارد شدید!'
      });
      this.router.navigate(['/user-management']);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'خطا',
        detail: 'نام کاربری یا رمز عبور اشتباه است!'
      });
    }
  }

  get formControl(){
    return this.form.controls;
  }
}
