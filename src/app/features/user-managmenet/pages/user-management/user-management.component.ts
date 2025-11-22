import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Divider} from 'primeng/divider';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {InputText} from 'primeng/inputtext';
import {Button} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {Tag} from 'primeng/tag';
import {debounceTime, distinctUntilChanged, Subject, takeUntil} from 'rxjs';
import {User} from '../../../auth/models/user';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {ConfirmationService} from 'primeng/api';
import {UserService} from '../../../../shared/services/user.service';
import {UserUpsertComponent} from '../../components/user-upsert/user-upsert.component';

@Component({
  selector: 'app-user-management',
  imports: [
    Divider,
    IconField,
    InputIcon,
    InputText,
    Button,
    TableModule,
    Tag
  ],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.less'
})
export class UserManagementComponent implements OnInit, OnDestroy {

  private readonly userService = inject(UserService);
  private readonly confirmationService = inject(ConfirmationService);
  private readonly dialogService = inject(DialogService);

  private readonly searchSubject = new Subject<string>();
  private readonly destroy$ = new Subject<void>();

  users = this.userService.users;
  ref?: DynamicDialogRef | null;

  ngOnInit(): void {
    this.userService.getUsers();

    this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe((searchTerm) => {
     this.userService.getUsers(searchTerm);
    });
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchSubject.next(value);
  }

  onAddUser(){
    this.ref = this.dialogService.open(UserUpsertComponent, {
      header: 'کاربر جدید',
      data: {
        mode: 'new',
      },
      width: '60vw',
      modal: true,
      closable: true,
      contentStyle: { overflow: 'auto' },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
      },

    });
  }

  onEditUser(user: User) {
    this.ref = this.dialogService.open(UserUpsertComponent, {
      header: 'ویرایش کاربران',
      data: {
        user,
        mode: 'edit',
      },
      width: '60vw',
      modal: true,
      closable: true,
      contentStyle: { overflow: 'auto' },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
      },

    });
  }

  onDeleteUser(event: Event, user: User) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `آیا از حذف کاربر "<b>${user.name}</b>" اطمبنان دارید؟`,
      header: 'حذف کاربر',
      icon: 'pi pi-info-circle',
      rejectButtonProps: {
        label: 'انصراف',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'حذف',
        severity: 'danger',
      },

      accept: () => {
        this.userService.deleteUser(user.id);
      },
    });


  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
