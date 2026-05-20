import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { UserItem } from '../../interfaces/users';
import { UsersService } from '../users';
import { AppSwal as Swal } from '../../shared/utils/swal';
import { UserModal } from './user-modal/user-modal';

@Component({
  selector: 'app-users',
  imports: [FormsModule, TableModule, DatePipe, UserModal],
  templateUrl: './users.html',
  styleUrl: './users.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Users implements OnInit {
  private usersService = inject(UsersService);

  filterText = '';
  usersList = signal<UserItem[]>([]);
  totalCount = signal(0);
  loading = signal(false);

  modalVisible = signal(false);
  selectedUser = signal<UserItem | null>(null);

  ngOnInit(): void {
    this.getUsers();
  }

  openCreateModal(): void {
    this.selectedUser.set(null);
    this.modalVisible.set(true);
  }

  openEditModal(user: UserItem): void {
    this.selectedUser.set(user);
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
    this.selectedUser.set(null);
  }

  onSaved(): void {
    this.modalVisible.set(false);
    this.selectedUser.set(null);
    this.getUsers();
  }

  getUsers(): void {
    this.loading.set(true);
    this.usersService.getUserList({
      filter: this.filterText,
      permissions: [],
      role: 0,
      onlyLockedUsers: false,
      sorting: '',
      maxResultCount: 1000,
      skipCount: 0,
    }).subscribe({
      next: (res) => {
        this.usersList.set(res.items);
        this.totalCount.set(res.totalCount);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        Swal.fire({
          icon: 'error',
          title: 'Failed to Load Users',
          text: err?.error?.error?.message ?? 'An error occurred while fetching users.',
        });
      },
    });
  }
}
