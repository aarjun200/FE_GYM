import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";
import { MatSortModule } from "@angular/material/sort";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MaterialFileInputModule } from "ngx-material-file-input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { UsersRoutingModule } from "./users-routing.module";
import { AddUserComponent } from "./add-user/add-user.component";
import { AllusersComponent } from "./allusers/allusers.component";
import { DeleteComponent } from "./allusers/dialog/delete/delete.component";
import { FormDialogComponent } from "./allusers/dialog/form-dialog/form-dialog.component";
import { UserService } from "./allusers/user.service";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    AddUserComponent,
    AllusersComponent,
    DeleteComponent,
    FormDialogComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSortModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule,
    MatMenuModule,
    MatCheckboxModule,
    MaterialFileInputModule,
    MatProgressSpinnerModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [UserService],
})
export class UsersModule {}
