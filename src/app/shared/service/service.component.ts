import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { USERD } from '@models/*';
import { DataService } from 'src/app/modules/admin/data.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
 
  displayedColumns: string[] = ['ID','CREATED', 'FIRSTNAME', 'LASTNAME','PHONE', 'EMAIL' ,'ADRESS','ROLE'];
  dataSource = new MatTableDataSource();
     users: USERD[];

  constructor(public dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.getAll().subscribe((users) => {
      this.dataSource.data = users;
    });
  }

}
