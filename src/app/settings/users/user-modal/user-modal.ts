import { ChangeDetectionStrategy, Component, inject, input, OnInit, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { UsersService } from '../../users';
import { RoleListItem, UserItem } from '../../../interfaces/users';
import { AppSwal as Swal } from '../../../shared/utils/swal';
import { CreateOrUpdateUserBody } from '../../../shared/models/users';

interface RoleItem extends RoleListItem {
  isAssigned: boolean;
}

@Component({
  selector: 'app-user-modal',
  imports: [DialogModule, ReactiveFormsModule],
  templateUrl: './user-modal.html',
  styleUrl: './user-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserModal implements OnInit {
  private usersService = inject(UsersService);
  private fb = inject(FormBuilder);

  user = input<UserItem | null>(null);
  visible = input(false);
  closed = output<void>();
  saved = output<void>();

  activeTab = signal<'info' | 'roles'>('info');
  saving = signal(false);
  showPassword = signal(false);
  showConfirmPassword = signal(false);
  roles = signal<RoleItem[]>([]);

  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    emailAddress: ['', [Validators.required, Validators.email]],
    phoneNumber: [''],
    userName: ['', Validators.required],
    password: [''],
    confirmPassword: [''],
    isActive: [true],
    shouldChangePasswordOnNextLogin: [false],
    sendActivationEmail: [false],
    setRandomPassword: [false],
    isTwoFactorEnabled: [false],
    isLockoutEnabled: [false],
  });

  get isEdit(): boolean {
    return !!this.user()?.id;
  }

  get passwordsMismatch(): boolean {
    const { password, confirmPassword, setRandomPassword } = this.form.getRawValue();
    return !setRandomPassword && !!password && password !== confirmPassword;
  }

  ngOnInit(): void {
    this.loadRoles();
    const u = this.user();
    if (u) {
      this.form.patchValue({
        name: u.name,
        surname: u.surname,
        emailAddress: u.emailAddress,
        phoneNumber: u.phoneNumber ?? '',
        userName: u.userName,
        isActive: u.isActive,
      });
    }
  }

  private loadRoles(): void {
    this.usersService.getRolesList({ maxResultCount: 1000, skipCount: 0, filter: '' }).subscribe({
      next: (res) => {
        const assigned = new Set((this.user()?.roles ?? []).map(r => r.roleName));
        this.roles.set(
          res.result.items.map(r => ({ ...r, isAssigned: assigned.has(r.name) }))
        );
      },
      error: (err) => {
        Swal.fire({ icon: 'error', title: 'Failed to Load Roles', text: err?.error?.error?.message ?? 'An error occurred.' });
      },
    });
  }

  toggleRole(role: RoleItem): void {
    this.roles.update(list =>
      list.map(r => r.name === role.name ? { ...r, isAssigned: !r.isAssigned } : r)
    );
  }

  assignedRoleCount(): number {
    return this.roles().filter(r => r.isAssigned).length;
  }

  close(): void {
    this.closed.emit();
  }

  save(): void {
    const { setRandomPassword } = this.form.getRawValue();

    if (!setRandomPassword && this.passwordsMismatch) {
      Swal.fire({ icon: 'error', title: 'Passwords Do Not Match', text: 'Please make sure both password fields match.' });
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      Swal.fire({ icon: 'warning', title: 'Missing Fields', text: 'Please fill in all required fields.' });
      return;
    }

    const v = this.form.getRawValue();
    const body: CreateOrUpdateUserBody = {
      user: {
        id: this.user()?.id,
        name: v.name,
        surname: v.surname,
        userName: v.userName,
        emailAddress: v.emailAddress,
        phoneNumber: v.phoneNumber,
        password: v.setRandomPassword ? '' : v.password,
        isActive: v.isActive,
        shouldChangePasswordOnNextLogin: v.shouldChangePasswordOnNextLogin,
        isTwoFactorEnabled: v.isTwoFactorEnabled,
        isLockoutEnabled: v.isLockoutEnabled,
        firstName: v.name,
        lastName: v.surname,
        usidn: '',
        registrationType: 1,
        countryName: '',
        deviceType: 1,
        registrationMode: 1,
        deviceIMEI: '',
        captchaResponse: 'true',
      },
      assignedRoleNames: this.roles().filter(r => r.isAssigned).map(r => r.name),
      sendActivationEmail: v.sendActivationEmail,
      setRandomPassword: v.setRandomPassword,
      organizationUnits: [],
    };

    this.saving.set(true);
    this.usersService.createOrUpdateUser(body).subscribe({
      next: () => {
        this.saving.set(false);
        Swal.fire({ icon: 'success', title: this.isEdit ? 'User Updated' : 'User Created', timer: 1800, showConfirmButton: false })
          .then(() => this.saved.emit());
      },
      error: (err) => {
        this.saving.set(false);
        Swal.fire({ icon: 'error', title: 'Failed to Save', text: err?.error?.error?.message ?? 'An error occurred.' });
      },
    });
  }
}
