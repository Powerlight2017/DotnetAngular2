import { Component, OnInit, Input } from '@angular/core';
import { Company } from './Company';
import { CompanyService, ICompany } from './company.service';
import { FormControl } from '@angular/forms';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

// http://www.c-sharpcorner.com/article/server-side-paging-in-kendo-grid-for-angular-2/

@Component({
    moduleId: __filename,
    selector: 'cform',
    templateUrl: './app/companies.html'
})

export class Companies {
    constructor(private _service: CompanyService) {
        this.Refresh();
    }

    // Grid
    private gridView: GridDataResult;
    private pageSize: number = 10;
    private skip: number = 0;
    private data: Object[];

    // Источник данных
    companies: ICompany[] = [];

    model = new Company(0, '', '', '', '', '', '');
    submitted = false;

    Refresh() {

        this._service.loadDataPaged(this.skip,  this.pageSize).then(data => {
            this.companies = data.companyList;
            
            this.gridView = {
                data: this.companies,
                total: data.count
            };
        })

    }
    
    // Пэйджинг
    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.Refresh();
    }

}
