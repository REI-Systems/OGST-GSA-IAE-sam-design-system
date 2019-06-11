import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { HeaderModel, NavigationMode } from '@gsa-sam/components'
@Component({
  selector: 'gsa-sam-header-sample',
  templateUrl: './header-sample.component.html',
  styleUrls: ['./header-sample.component.scss']
})
export class HeaderSampleComponent implements OnInit {

  constructor() { }


  public linkEvent = new BehaviorSubject<object>(null);



  ngOnInit() {

    this.linkEvent.subscribe(
      value => {
        console.log('Link Event Clicked Change');
        console.log(value);
      }
    );
  }

  modelHeader: HeaderModel = {
    secondaryLinks: [{
      imageClassPrefix: 'fas', imageClass: 'comment', text: 'Messages', route: 'http://www.google.com', id: 'messages', mode: NavigationMode.EXTERNAL
    },
    {
      imageClassPrefix: 'fas', imageClass: 'edit', text: 'Requests', route: '/', id: 'request', hasCounter: true, mode: NavigationMode.EVENT
    },
    {
      imageClassPrefix: 'fas', imageClass: 'th', text: 'Workspace', route: '/', id: 'workspace', mode: NavigationMode.INTERNAL
    },
    {
      imageClassPrefix: 'fas', imageClass: 'sign-out-alt', text: 'Sign Out', route: '/', id: 'signOut', mode: NavigationMode.INTERNAL
    }],
    navigationLinks: [
      { text: 'Search', route: 'http://www.google.com', id: 'search', mode: NavigationMode.EXTERNAL },
      { text: 'Databank', route: '/', id: 'databank', mode: NavigationMode.EVENT },
      { text: 'Data Services', route: '/', id: 'dataService', mode: NavigationMode.INTERNAL },
      { text: 'Help', route: '/', id: 'help', mode: NavigationMode.INTERNAL },
      {
        text: 'Link 3', id: 'link3', mode: NavigationMode.INTERNAL, route: null, children: [
          { text: 'Link 3 sub 1', route: '/', id: 'link3sub1', mode: NavigationMode.INTERNAL },
          { text: 'Link 3 sub 2', route: '/', id: 'link3sub2', mode: NavigationMode.INTERNAL },
          { text: 'Link 3 sub 3', route: '/', id: 'link3sub3', mode: NavigationMode.INTERNAL },
          { text: 'Link 3 sub 4', route: '/', id: 'link3sub4', mode: NavigationMode.INTERNAL }
        ]
      },
      {
        text: 'Link 4', id: 'link4', mode: NavigationMode.INTERNAL, route: null, children: [
          { text: 'Link 4 sub 1', route: '/', id: 'link4sub1', mode: NavigationMode.INTERNAL },
          { text: 'Link 4 sub 2', route: '/', id: 'link4sub2', mode: NavigationMode.INTERNAL },
          { text: 'Link 4 sub 3', route: '/', id: 'link4sub3', mode: NavigationMode.INTERNAL },
          { text: 'Link 4 sub 4', route: '/', id: 'link4sub4', mode: NavigationMode.INTERNAL }
        ]
      }
    ],
    home: {
      text: 'Home',
      route: '/',
      id: 'home', mode: NavigationMode.INTERNAL
    }
  };
}
