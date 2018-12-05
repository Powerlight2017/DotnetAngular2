import { Component, OnInit, Input } from '@angular/core';
import { User } from './user';
import { UserService, IUser, IUserpermission } from './user.service';
import { UserPermission} from './userpermission';
import { FormControl } from '@angular/forms';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

// http://www.c-sharpcorner.com/article/server-side-paging-in-kendo-grid-for-angular-2/

@Component({
    moduleId: __filename,
    selector: 'caform',
    templateUrl: './app/users-admin.html'
})

export class UsersAdmin {
    constructor(private _service: UserService) {
        this.Refresh();
    }

    private InEdit: boolean = false;

    // Grid
    private gridView: GridDataResult;
    private pageSize: number = 10;
    private skip: number = 0;
    private data: Object[];

    // Разрешения 
    constUserPermissionEdit: string = 'permission-edit';
    constUserPermissionSpecialSections: string = 'permission-special-sections';

    // Источник данных
    Users: IUser[] = [];
 
    model = new User(0, '', '', []);
    submitted = false;

    Refresh() {

        this._service.loadDataPaged(this.skip, this.pageSize).then(data => {
            this.Users = data.userList;

            this.gridView = {
                data: this.Users,
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

    onSelect(elem: any) {
        if (elem == 0) // 0 - будет добавляться новый элемент
        { 
            this.model = new User(0, '', '', []);
            this.model.userPermissions = [];
        }


        else {
            this.model = elem;
             
        }

        this.InEdit = true;

    }


    /// Требуемое разрешение есть у пользователя
    requiredPermissionExist(userPermissions: IUserpermission[], permissionName : string) {
    for (var i = 0; i < userPermissions.length; i++)
        if (userPermissions[i].permissionName == permissionName)
            return true;
    return false;
    }

    // Установка разрешения в текущей модели
    setPermission(userPermissions: IUserpermission[], permissionName: string)
    {
        var exists = false;
        for (var i = 0; i < userPermissions.length; i++)
            if (userPermissions[i].permissionName == permissionName)
                exists = true;
                 
         
        var newPermissions:IUserpermission[] = [];

        if (exists) //Надо убрать
        {
            for (var i = 0; i < userPermissions.length; i++)
                if (userPermissions[i].permissionName != permissionName)
                    newPermissions.push(userPermissions[i]);
        } else
        {
            //Надо добавить
            for (var i = 0; i < userPermissions.length; i++)
                newPermissions.push(userPermissions[i]);

            var newPerm: IUserpermission = new UserPermission(this.model.id, permissionName);
            newPermissions.push(newPerm);

        }

        this.model.userPermissions = newPermissions;
    }


    // Пэйджинг
    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.Refresh();
    }



}
