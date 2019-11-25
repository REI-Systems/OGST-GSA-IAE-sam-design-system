/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SdsFooter} from './footer';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [SdsFooter],
  declarations: [SdsFooter],
})
export class SdsFooterModule {}
