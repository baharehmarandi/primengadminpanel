import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FloatLabel} from 'primeng/floatlabel';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {InputText} from 'primeng/inputtext';
import {RequiredMarkDirective} from '../../../../shared/directives/required-mark.directive';
import { RadioButtonModule } from 'primeng/radiobutton';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {Select} from 'primeng/select';
import {Button} from 'primeng/button';
import {UserService} from '../../../../shared/services/user.service';

@Component({
  selector: 'app-user-upsert',
  imports: [
    ReactiveFormsModule,
    FloatLabel,
    InputGroup,
    InputGroupAddon,
    InputText,
    RadioButtonModule,
    RequiredMarkDirective,
    Select,
    Button
  ],
  templateUrl: './user-upsert.component.html',
  styleUrl: './user-upsert.component.less'
})
export class UserUpsertComponent implements OnInit {

  form!: FormGroup;
  roleOptions = [
    {
      id: 1,
      value: 'manager',
      label: 'مدیر'
    },
    {
      id: 2,
      value: 'user',
      label: 'کاربر'
    }
  ];

  private readonly fb = inject(FormBuilder);
  protected readonly dialogConfig = inject(DynamicDialogConfig);
  private readonly dynamicDialogRef = inject(DynamicDialogRef);
  private readonly userService = inject(UserService);

  ngOnInit() {
    this.createUpsertForm();
    if(this.dialogConfig.data.mode === 'edit') {
      this.form.patchValue(this.dialogConfig.data.user);
    }
  }

  createUpsertForm(){
    this.form = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      username: ['', Validators.required],
      role: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: [''],
      password: ['', Validators.required],
      status: [true],
    })
  }

  submitForm() {
    if(this.form.valid) {
      if(this.dialogConfig.data.mode === 'edit') {
        this.userService.updateUser(this.form.value);
        this.dynamicDialogRef.close();
      } else{
        this.userService.addUser(this.form.value);
        this.dynamicDialogRef.close();
      }
    }
  }

  get formControl(){
    return this.form.controls;
  }
}
