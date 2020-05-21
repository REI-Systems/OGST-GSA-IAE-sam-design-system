import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import * as qs from 'qs';

/**
 * @param {string} [to.tagClass] Class to be added to the tag (default: sds-tag--info-white)
 * @param {string} [to.tagText] Text to be shown inside the tag
 * @param {string} [to.ariaHidden] Hide the label
 * @param {string} [to.labelClass] Class to be applied to the label
 * @param {string} [to.label] Text to be shown for the label
 * @param {string} [to.required] Makes the field required
 * @param {string} [to.description] Add a description below the label
 * @param {string} [to.hideOptional] Remove the optional text
 * @param {string} [to.hideLabel] Hide the label
 * 
 */
@Component({
  template: `
  <ng-container [ngSwitch]="to.group">
    <ng-container *ngSwitchCase="'accordion'">
      <sds-accordion multi="true" displayMode="basic">
        <sds-accordion-item class="sds-accordion__panel" [expanded]="modelHasValue()">
          <sds-accordion-item-header> <span *ngIf="!to.hideLabel" [attr.aria-hidden]="!to.announceLabel ? undefined : 'true'"> {{to.label}} </span> </sds-accordion-item-header>
          <ng-container #fieldComponent></ng-container>
        </sds-accordion-item>
      </sds-accordion>
    </ng-container>
    <ng-container *ngSwitchCase="'panel'">
      <div class="sds-panel" [ngClass]="{'sds-panel--multiple' : field?.fieldGroup?.length }">
        <div class="sds-panel__header" *ngIf="!to.hideLabel" [attr.aria-hidden]="!to.announceLabel ? undefined : 'true'"> {{to.label}} </div>
        <div class="sds-panel__body">
          <ng-container #fieldComponent></ng-container>
        </div>
      </div>
    </ng-container>
    <ng-container *ngSwitchDefault>
      <ng-container #fieldComponent></ng-container>
    </ng-container>
  </ng-container>
  `,
})
export class FormlyGroupWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
  constructor() {
    super();
  }
  modelHasValue() {
    const hasValue= qs.stringify(this.model, { skipNulls: true});
    return this.to.expand  ? true : hasValue ? true : false;
  }
}
