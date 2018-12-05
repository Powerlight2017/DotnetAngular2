import { Component, OnInit, Input } from '@angular/core';
import { Company } from './Company';
import { CompanyService, ICompany } from './company.service';
import { FormControl } from '@angular/forms';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

// http://www.c-sharpcorner.com/article/server-side-paging-in-kendo-grid-for-angular-2/

@Component({
    moduleId: __filename,
    selector: 'caform',
    templateUrl: './app/companies-admin.html'
})

export class CompaniesAdmin {
    constructor(private _service: CompanyService) {
        this.Refresh();
    }

    private InEdit: boolean = false;

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


    // CRUD
    onSubmit() {
        console.log("Sumbitted Form ! ");
        this.submitted = true;
        this._service.AddOrUpdate(this.model).then(data => {
            this._service.announceChange(1212);
            this.Refresh();
        })

        this.InEdit = false;
    }

    onUpdate(elem) {
        console.log(elem);

        this._service.Update(elem).then(data => {
            this.Refresh();
        })

        this.InEdit = false;
    }
    onDelete(elem: number) {
        console.log("Delete Form ! ");
        console.log(elem);
        this._service.Delete(elem).then(data => {
            this.Refresh();
        })
    }

    onSelect(elem: any)
    {
        if (elem == 0) // 0 - будет добавляться новый элемент
            this.model = new Company(0, '', '', '', '', '', '');
        else {
            this.model = elem;

        }

        this.InEdit = true;

    }

    // Пэйджинг
    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.Refresh();
    }



}
