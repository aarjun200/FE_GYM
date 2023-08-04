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
import { MatDialogModule } from "@angular/material/dialog";
import { MatSortModule } from "@angular/material/sort";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { TrainersRoutingModule } from "./trainers-routing.module";
import { AlltrainersComponent } from "./alltrainers/alltrainers.component";
import { DeleteDialogComponent } from "./alltrainers/dialogs/delete/delete.component";
import { FormDialogComponent } from "./alltrainers/dialogs/form-dialog/form-dialog.component";
import { AddTrainerComponent } from "./add-trainer/add-trainer.component";
import { MaterialFileInputModule } from "ngx-material-file-input";
import { MatTabsModule } from "@angular/material/tabs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { TrainersService } from "./alltrainers/trainers.service";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    AlltrainersComponent,
    DeleteDialogComponent,
    FormDialogComponent,
    AddTrainerComponent,
  ],
  imports: [
    CommonModule,
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
    MatSelectModule,
    MatDatepickerModule,
    MatTabsModule,
    MatCheckboxModule,
    MaterialFileInputModule,
    TrainersRoutingModule,
    MatProgressSpinnerModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [TrainersService],
})
export class TrainersModule {}
