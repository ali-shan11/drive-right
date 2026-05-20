import Swal from 'sweetalert2';

export const AppSwal = Swal.mixin({
  customClass: {
    popup: 'swal-app-popup',
    title: 'swal-app-title',
    htmlContainer: 'swal-app-text',
    confirmButton: 'swal-app-confirm',
    cancelButton: 'swal-app-cancel',
    icon: 'swal-app-icon',
  },
  buttonsStyling: false,
});
