import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";
@Component({
  selector: 'gsa-sam-pagination-sample',
  templateUrl: './pagination-sample.component.html',
  styleUrls: ['./pagination-sample.component.scss']
})
export class PaginationSampleComponent implements OnInit {

  page = {
    pageNumber: 1,
    pageSize: 25,
    totalPages: 10
  }

  public pageChange = new BehaviorSubject<object>(this.page);
  constructor() { }

  ngOnInit() {
    this.pageChange.subscribe(
      value => {
        console.log('Page Change');
        console.log(value);
      }
    );
  }

}
