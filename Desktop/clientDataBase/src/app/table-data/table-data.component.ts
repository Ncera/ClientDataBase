import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent {
  clientForm: FormGroup

  constructor(private _fb: FormBuilder, private _clientServices: ClientService, private _dialogRef: DialogRef<TableDataComponent>) {
    this.clientForm = this._fb.group({
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      gender: "",
    });
  }

  onFormSubmit() {
    if (this.clientForm.valid) {
      this._clientServices.addClient(this.clientForm.value).subscribe({
        next: (val: any) => {
          alert('Client added successfuly');
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
        },
      })
    }
  }
}
