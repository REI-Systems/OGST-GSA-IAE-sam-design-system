import { Component } from '@angular/core';

@Component({
  selector: 'gsa-sam-table-expandable-row',
  templateUrl: './table-expandable-row.component.html'
})
export class TableExpandableRowComponent {
  data = [
    {
      name: 12345,
      date: 'mm/dd/yyyy',
      run: 'Lorem ipsum dolor sit amet',
      active: 'consectetur adipiscing elit sed do eiusmod'
    },
    {
      name: 12346,
      date: 'mm/dd/yyyy',
      run: 'Lorem ipsum dolor sit amet',
      active: 'consectetur adipiscing elit sed do eiusmod'
    },
    {
      name: 12347,
      date: 'mm/dd/yyyy',
      run: 'Lorem ipsum dolor sit amet',
      active: 'consectetur adipiscing elit sed do eiusmod'
    },
    {
      name: 12348,
      date: 'mm/dd/yyyy',
      run: 'Lorem ipsum dolor sit amet',
      active: 'consectetur adipiscing elit sed do eiusmod'
    },
    {
      name: 12349,
      date: 'mm/dd/yyyy',
      run: 'Lorem ipsum dolor sit amet',
      active: 'consectetur adipiscing elit sed do eiusmod'
    },
    {
      name: 12350,
      date: 'mm/dd/yyyy',
      run: 'Lorem ipsum dolor sit amet',
      active: 'consectetur adipiscing elit sed do eiusmod'
    }
  ];
  columns = ["name", "date", "run", "active"];

  detailRow = "<h1>{{name}}</h1>";
  // data = [
  //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  //   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  //   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  //   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  //   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  //   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  //   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  //   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  //   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  //   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  //   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  //   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  //   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  //   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  //   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  //   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  //   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  //   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  //   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  //   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  //   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  //   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  //   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  //   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  //   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  //   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  //   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  // ];

  // columns = ['position', 'name', 'weight', 'symbol'];

  constructor() {}
}