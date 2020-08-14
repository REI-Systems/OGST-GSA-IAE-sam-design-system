const MATERIAL = {
    "pipes": [],
    "interfaces": [],
    "injectables": [],
    "classes": [
        {
            "name": "SdsTableColumnSettings",
            "id": "class-SdsTableColumnSettings-6cd4df0dfd554e2ded8bf7f0e77eb2cc",
            "file": "libs/packages/sam-material-extensions/src/lib/table/models/table-column-settings.model.ts",
            "type": "class",
            "sourceCode": "export class SdsTableColumnSettings {\n  primaryKey: string;\n  alternativeKeys?: string[];\n  header?: string;\n  format?: string;\n  sticky?: boolean = false;\n}\n",
            "properties": [
                {
                    "name": "alternativeKeys",
                    "type": "string[]",
                    "optional": true,
                    "description": "",
                    "line": 3
                },
                {
                    "name": "format",
                    "type": "string",
                    "optional": true,
                    "description": "",
                    "line": 5
                },
                {
                    "name": "header",
                    "type": "string",
                    "optional": true,
                    "description": "",
                    "line": 4
                },
                {
                    "name": "primaryKey",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 2
                },
                {
                    "name": "sticky",
                    "defaultValue": "false",
                    "type": "boolean",
                    "optional": true,
                    "description": "",
                    "line": 6
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        }
    ],
    "directives": [],
    "components": [
        {
            "name": "SdsTableComponent",
            "id": "component-SdsTableComponent-5e0e4a5462290809f27b2564fcc57337",
            "file": "libs/packages/sam-material-extensions/src/lib/table/table.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-table",
            "styleUrls": [
                "./table.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./table.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "borderless",
                    "defaultValue": "false",
                    "description": "<p>table without border</p>\n",
                    "line": 33,
                    "type": "boolean"
                },
                {
                    "name": "columns",
                    "description": "<p>columns to display in header\n{@link SdsTableColumnSettings}</p>\n",
                    "line": 22,
                    "type": "SdsTableColumnSettings[]"
                },
                {
                    "name": "dataSource",
                    "description": "<p>Data source for table</p>\n",
                    "line": 16,
                    "type": "any[]"
                },
                {
                    "name": "detailRow",
                    "description": "<p>template outlet for expandable detail\nall properties for the selected row will be available for use in the template after set using let-{new property name}</p>\n",
                    "line": 28,
                    "type": "TemplateRef<any>"
                },
                {
                    "name": "sort",
                    "defaultValue": "false",
                    "description": "<p>sortable table</p>\n",
                    "line": 43,
                    "type": "boolean"
                },
                {
                    "name": "stickyHeader",
                    "defaultValue": "false",
                    "description": "<p>Include sticky header row</p>\n",
                    "line": 38,
                    "type": "boolean"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "columnIds",
                    "defaultValue": "[]",
                    "type": "string[]",
                    "optional": false,
                    "description": "<p>column ids displayed</p>\n",
                    "line": 59
                },
                {
                    "name": "expandedRow",
                    "type": "any | null",
                    "optional": false,
                    "description": "<p>currently expanded row</p>\n",
                    "line": 54
                },
                {
                    "name": "sortDirection",
                    "defaultValue": "'asc'",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 49
                },
                {
                    "name": "sortKey",
                    "type": "string",
                    "optional": false,
                    "description": "<p>sort vars</p>\n",
                    "line": 48
                }
            ],
            "methodsClass": [
                {
                    "name": "adjustSort",
                    "args": [
                        {
                            "name": "col",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 73,
                    "jsdoctags": [
                        {
                            "name": "col",
                            "type": "string",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 63
                },
                {
                    "name": "toggleRowExpansion",
                    "args": [
                        {
                            "name": "row",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 69,
                    "jsdoctags": [
                        {
                            "name": "row",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, TemplateRef, OnInit } from '@angular/core';\nimport * as _ from 'lodash';\nimport { SdsTableColumnSettings } from './models/table-column-settings.model';\n\n@Component({\n  selector: 'sds-table',\n  templateUrl: './table.component.html',\n  styleUrls: ['./table.component.scss']\n})\n\nexport class SdsTableComponent implements OnInit {\n\n  /**\n   * Data source for table\n   */\n  @Input() dataSource: any[];\n\n  /**\n   * columns to display in header\n   * {@link SdsTableColumnSettings}\n   */\n  @Input() columns: SdsTableColumnSettings[];\n\n  /**\n   * template outlet for expandable detail\n   * all properties for the selected row will be available for use in the template after set using let-{new property name}\n   */\n  @Input() detailRow?: TemplateRef<any>;\n\n  /**\n   * table without border\n   */\n  @Input() borderless?: boolean = false;\n\n  /**\n   * Include sticky header row\n   */\n  @Input() stickyHeader?: boolean = false;\n\n  /**\n   * sortable table\n   */\n  @Input() sort?: boolean = false;\n\n  /**\n   * sort vars\n   */\n  sortKey: string;\n  sortDirection: string = 'asc';\n\n  /**\n   * currently expanded row\n   */\n  expandedRow: any | null;\n\n  /**\n   * column ids displayed\n   */\n  columnIds: string[] = [];\n\n  constructor() {}\n\n  ngOnInit() {\n    this.columns.forEach(col => {\n      this.columnIds.push(col.primaryKey);\n    })\n  }\n\n  toggleRowExpansion(row: any) {\n    this.expandedRow = this.expandedRow === row ? null : row;\n  }\n\n  adjustSort(col: string) {\n    if (this.sortKey === col) {\n      if (this.sortDirection === 'asc') {\n        this.sortDirection = 'desc';\n      } else {\n        this.sortDirection = 'asc';\n      }\n      return this.dataSource = _.orderBy(this.dataSource, col, this.sortDirection);\n    }\n\n    this.sortKey = col;\n    this.sortDirection = 'asc';\n    this.dataSource = _.orderBy(this.dataSource, col, this.sortDirection);\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": ".sds-table {\n  width: 100%;\n  border-collapse: separate;\n  border: 0;\n  margin: 0;\n\n  tr.sds-table__head {\n    > th {\n      border-bottom: 1px solid #C9C9C9;\n      background:  #F5F5F0;\n    }\n  }\n\n  // sort button\n  .usa-button--unstyled {\n    color: inherit;\n    white-space: nowrap;\n    fa-icon:not(.active) {\n      color: #C9C9C9;\n    }\n  }\n\n  .sds-table__row {\n    td.cdk-table-sticky:nth-child(1) {\n      border-right: 1px solid #C9C9C9;\n    }\n  }\n\n  // expansion tables\n  &--expansion {\n    tr:nth-child(4n + 3) {\n      > * {\n        background: #F9F9F7;\n      }\n    }\n\n    // expansion row parent\n    .sds-table__row--expanded {\n      td {\n        background: #E9F0FB;\n        border-top: 1px solid #C9C9C9;\n      }\n      // expansion row when expanded\n      + .sds-table__row--detail {\n        display: table-row;\n      }\n    }\n\n    // expansion row when collapsed\n    .sds-table__row--detail {\n      display: none;\n      .sds-table__detail {\n        border-bottom: 1px solid #C9C9C9;\n        background: white;\n      }\n    }\n  }\n}\n\n:host {\n  height: inherit;\n  max-height: inherit;\n}\n\n.sds-table__container {\n  border: 1px solid #C9C9C9;\n  height: inherit;\n  max-height: inherit;\n  overflow: auto;\n  &--borderless {\n    border: 0;\n  }\n}\n",
                    "styleUrl": "./table.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 59
            },
            "implements": [
                "OnInit"
            ],
            "templateData": "<div class=\"sds-table__container\" [ngClass]=\"{'sds-table__container--borderless': borderless}\">\n  <table cdk-table [dataSource]=\"dataSource\" [multiTemplateDataRows]=\"detailRow\" [ngClass]=\"{'sds-table--expansion': detailRow}\" class=\"sds-table\">\n\n    <!-- Columns -->\n    <ng-container cdkColumnDef=\"{{col.primaryKey}}\" [sticky]=col.sticky *ngFor=\"let col of columns\">\n\n      <!-- table header cells -->\n      <th cdk-header-cell *cdkHeaderCellDef scope=\"col\">\n\n        <!-- sort header button-->\n        <button *ngIf=\"sort\" (click)=\"adjustSort(col.primaryKey)\" class=\"usa-button--unstyled\">\n          {{ col.header  || (col.primaryKey | titlecase)}}\n          <fa-icon *ngIf=\"sortDirection === 'desc' && sortKey === col.primaryKey\" [ngClass]=\"{'active': sortKey === col.primaryKey}\"\n            [icon]=\"['fas', 'caret-down']\"></fa-icon>\n          <fa-icon *ngIf=\"sortKey !== col.primaryKey || sortDirection === 'asc' && sortKey === col.primaryKey\"\n            [ngClass]=\"{'active': sortKey === col.primaryKey}\" [icon]=\"['fas', 'caret-up']\"></fa-icon>\n        </button>\n\n        <span *ngIf=\"!sort\">{{ col.header  || (col.primaryKey | titlecase)}}</span>\n      </th>\n\n      <td cdk-cell *cdkCellDef=\"let row\">{{row[col.primaryKey]}}</td>\n    </ng-container>\n\n    <!-- Expandable detail row -->\n    <ng-container cdkColumnDef=\"expandedDetail\">\n      <td cdk-cell *cdkCellDef=\"let row\" [attr.colspan]=\"columns.length\" class=\"sds-table__detail\">\n\n        <!-- display detailRow templateRef with all row data -->\n        <ng-container *ngTemplateOutlet=\"detailRow; context: row\"></ng-container>\n      </td>\n    </ng-container>\n\n    <!-- Header and row declarations for expansion table-->\n    <ng-container *ngIf=\"detailRow\">\n      <tr cdk-header-row *cdkHeaderRowDef=\"columnIds; sticky: stickyHeader\" class=\"sds-table__head\"></tr>\n      <tr cdk-row *cdkRowDef=\"let row; columns: columnIds\" (click)=\"toggleRowExpansion(row)\" class=\"sds-table__row\"\n        [ngClass]=\"{'sds-table__row--expanded': row === expandedRow}\"></tr>\n      <tr cdk-row *cdkRowDef=\"let row; columns: ['expandedDetail']\" class=\"sds-table__row--detail\"></tr>\n    </ng-container>\n\n    <!-- Header and row declarations for non-expandable tables-->\n    <ng-container *ngIf=\"!detailRow\">\n      <tr cdk-header-row *cdkHeaderRowDef=\"columnIds; sticky: stickyHeader\" class=\"sds-table__head\"></tr>\n      <tr cdk-row *cdkRowDef=\"let row; columns: columnIds\" class=\"sds-table__row\"></tr>\n    </ng-container>\n  </table>\n</div>\n"
        }
    ],
    "modules": [
        {
            "name": "PackagesSamMaterialExtensionsModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": []
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": []
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsTableModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsTableComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsTableComponent"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        }
    ],
    "miscellaneous": {
        "variables": [
            {
                "name": "context",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/sam-material-extensions/src/test.ts",
                "type": "",
                "defaultValue": "require.context('./', true, /\\.spec\\.ts$/)"
            },
            {
                "name": "require",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/sam-material-extensions/src/test.ts",
                "type": "any"
            }
        ],
        "functions": [],
        "typealiases": [],
        "enumerations": [],
        "groupedVariables": {
            "libs/packages/sam-material-extensions/src/test.ts": [
                {
                    "name": "context",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/sam-material-extensions/src/test.ts",
                    "type": "",
                    "defaultValue": "require.context('./', true, /\\.spec\\.ts$/)"
                },
                {
                    "name": "require",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/sam-material-extensions/src/test.ts",
                    "type": "any"
                }
            ]
        },
        "groupedFunctions": {},
        "groupedEnumerations": {},
        "groupedTypeAliases": {}
    }
};

export default MATERIAL;