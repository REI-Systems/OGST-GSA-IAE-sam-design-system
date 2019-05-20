import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSampleComponent } from './feature/header-sample/header-sample.component';
import { FooterSampleComponent } from './feature/footer-sample/footer-sample.component';
import { FooterSampleModule } from './feature/footer-sample/footer-sample.module';
import { HeaderSampleModule } from './feature/header-sample/header-sample.module';
import { PaginationSampleComponent } from './feature/pagination-sample/pagination-sample.component';
import { PaginationSampleModule } from './feature/pagination-sample/pagination-sample.module';
import { ToolbarSampleComponent } from './feature/toolbar-sample/toolbar-sample.component';
import { ToolbarSampleModule } from './feature/toolbar-sample/toolbar-sample.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sdsIcons } from '@gsa-sam/components';
import { IconSampleModule } from './feature/icon-sample/icon-sample.module';
import { IconSampleComponent } from './feature/icon-sample/icon-sample.component';
import { SideNavigationSampleModule } from './feature/side-navigation-sample/side-navigation-sample.module';
import { SideNavigationSampleComponent } from './feature/side-navigation-sample/side-navigation-sample.component';
const appIcons = {
  // App Specific Icons
};

export const ROUTES: Routes = [
  { path: 'header', component: HeaderSampleComponent },
  { path: 'footer', component: FooterSampleComponent },
  { path: 'pagination', component: PaginationSampleComponent },
  { path: 'toolbar', component: ToolbarSampleComponent },
  { path: 'icon', component: IconSampleComponent },
  { path: 'sideNav', component: SideNavigationSampleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(ROUTES),
    HeaderSampleModule,
    FooterSampleModule,
    PaginationSampleModule,
    ToolbarSampleModule,
    IconSampleModule,
    SideNavigationSampleModule
  ],
  exports: [RouterModule]
})
export class ComponentSampleModule {
  constructor() {
    library.add(sdsIcons, appIcons);
  }
}