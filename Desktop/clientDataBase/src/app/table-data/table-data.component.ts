import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit{
  clientForm: FormGroup

  constructor(
    private _fb: FormBuilder, 
    private _clientServices: ClientService,
    private _dialogRef: MatDialogRef<TableDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.clientForm = this._fb.group({
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      gender: "",
    });
  }

  ngOnInit(): void {
    this.clientForm.patchValue(this.data);
  }

  onFormSubmit() {
      if (this.clientForm.valid) {
        if(this.data) {
          this._clientServices
          .updateClient(this.data.id, this.clientForm.value)
          .subscribe({
            next: (val: any) => {
              alert('Client detail update!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
        } else {
        this._clientServices
        .addClient(this.clientForm.value)
        .subscribe({
          next: (val: any) => {
            alert('Client added successfuly');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
