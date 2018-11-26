import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GridView';

  displayedColumns: string[] = ['username', 'title', 'age'];
  dataSource = new MatTableDataSource(this.getAllArticles());

  getAllArticles() {
    return [
      {
        username: 'ananhek',
        age: '31',
        title: 'Anand'
      },
      {
        username: 'khansp',
        age: '31',
        title: 'Khan'
      }
    ];
  }
}
