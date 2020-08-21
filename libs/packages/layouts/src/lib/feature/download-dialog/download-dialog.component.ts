import { Component, Inject, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { SdsDialogRef, SDS_DIALOG_DATA } from '@gsa-sam/components';

@Component({
  selector: 'sds-formly-dialog',
  templateUrl: './formly-dialog.component.html'
})
export class SdsDownloadDialogComponent implements OnInit {
  form: FormGroup;
  model: any;
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[];
  cancel: string;
  submit: string;

  constructor(
    public dialogRef: SdsDialogRef<SdsDownloadDialogComponent>,
    @Inject(SDS_DIALOG_DATA) public data: any
  ) {}

  public ngOnInit() {
    this.fields = this.data.fields;
    this.form = this.data.form ? this.data.form : new FormGroup({});
    this.model = this.data.model ? this.data.model : {};
    this.options = this.data.options ? this.data.options : {};
    this.cancel = this.data.cancel ? this.data.cancel : 'Cancel';
    this.submit = this.data.submit ? this.data.submit : 'Submit';
  }

  onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(this.model);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
