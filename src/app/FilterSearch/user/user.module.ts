import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { SearchComponent } from '../search/search.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutes } from './user-routing.module';
import {FilterPipePipe} from '../Pipe/filter-pipe.pipe';
import {UserService} from '../Services/user.service';


@NgModule({
  imports:      [ CommonModule, FormsModule, ReactiveFormsModule, UserRoutes ],
  declarations: [ UserComponent, SearchComponent, UserListComponent, FilterPipePipe, UserListComponent ],
  providers: [ UserService ]
})
export class UserModule { }
