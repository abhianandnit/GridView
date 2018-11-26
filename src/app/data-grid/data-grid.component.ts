import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { FetchDataService } from './fetch-data.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  title = 'GridView';
  displayedColumns: string[] = ['username', 'title', 'age', 'value', 'min', 'max'];
  dataSource = new MatTableDataSource(this.fetchDataService.getData());

  constructor(private fetchDataService: FetchDataService) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
