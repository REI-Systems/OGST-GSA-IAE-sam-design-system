import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared';
import { TableBasicComponent } from './demos/table-basic/table-basic.component';
import { TableBasicModule } from './demos/table-basic/table-basic.module';
import { TableBorderlessComponent } from './demos/table-borderless/table-borderless.component';
import { TableBorderlessModule } from './demos/table-borderless/table-borderless.module';
import { TableStickyHeaderModule } from './demos/table-sticky-header/table-sticky-header.module';
import { TableStickyHeaderComponent } from './demos/table-sticky-header/table-sticky-header.component';
import { TableSortModule } from './demos/table-sort/table-sort.module';
import { TableSortComponent } from './demos/table-sort/table-sort.component';

export declare var require: any;

const DEMOS = {
  basic: {
    title: 'SAM Table', // Title
    type: TableBasicComponent, // Component
    code: require('!!raw-loader!./demos/table-basic/table-basic.component'), // Source Tab Content
    markup: require('!!raw-loader!./demos/table-basic/table-basic.component.html'), // Template Tab Content
    path: 'libs/documentation/src/lib/components/table/demos/table-basic' // Path to demo for the Github link
  },
  borderless: {
    title: 'SAM Table Borderless',
    type: TableBorderlessComponent,
    code: require('!!raw-loader!./demos/table-borderless/table-borderless.component'),
    markup: require('!!raw-loader!./demos/table-borderless/table-borderless.component.html'),
    path: 'libs/documentation/src/lib/components/table/demos/table-borderless'
  },
  stickyHeader: {
    title: 'SAM Table Sticky Header',
    type: TableStickyHeaderComponent,
    code: require('!!raw-loader!./demos/table-sticky-header/table-sticky-header.component'),
    markup: require('!!raw-loader!./demos/table-sticky-header/table-sticky-header.component.html'),
    path: 'libs/documentation/src/lib/components/table/demos/table-sticky-header'
  },
  sort: {
    title: 'SAM Table Sort',
    type: TableSortComponent,
    code: require('!!raw-loader!./demos/table-sort/table-sort.component'),
    markup: require('!!raw-loader!./demos/table-sort/table-sort.component.html'),
    path: 'libs/documentation/src/lib/components/table/demos/table-sort'
  },
 };

 export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      items: [ // Defines what documentation to display on the API tab
        {
          pkg: 'material',
          type: 'components', // Within the compodocs, target the components section
          name: 'TableComponent'
        }
      ]
    },
    children: [ // You can omit any tab sections by removing the child routes here
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage }
    ]
  }
 ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    TableBasicModule,
    TableBorderlessModule,
    TableStickyHeaderModule,
    TableSortModule
  ]
})

export class TableModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('table', DEMOS); // Register the component with the demo list
  }
}