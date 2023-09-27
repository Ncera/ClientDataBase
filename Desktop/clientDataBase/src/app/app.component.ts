import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableDataComponent } from './table-data/table-data.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from './services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'table-data';

    displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'phoneNo',
    'gender',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _clientService: ClientService
  ) {}
  ngOnInit(): void {
    this.getClientList();
  }

  openTableDataForm() {
   const dialogRef = this._dialog.open(TableDataComponent);
   dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.getClientList();
      }
    },
   });
  }

  getClientList() {
    this._clientService.getClient().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource. sort = this.sort;
        this.dataSource. paginator = this.paginator;
      },
      error: console.log,
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteClient(id: number) {
    this._clientService.deleteClient(id).subscribe({
      next: (res) => {
        alert('Client deleted!');
        this.getClientList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(TableDataComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getClientList();
        }
      },
     });
    
   }
}
