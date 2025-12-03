import { Component, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-confirm-dialog',
  imports: [DatePipe, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './confirm-dialog.html',
  styleUrl: './confirm-dialog.scss',
})
export class ConfirmDialog {
  readonly hidePassword = signal(true);
  readonly dialogRef = inject(MatDialogRef<ConfirmDialog>);
  data = inject(MAT_DIALOG_DATA);

  cancel(): void {
    this.dialogRef.close();
  }

  confirm(): void {
    this.dialogRef.close(this.data);
  }

  toggleHidePassword(event: MouseEvent) {    
    this.hidePassword.set(!this.hidePassword());
  }
}
