import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import { TrainersService } from "../../trainers.service";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { Trainers } from "../../trainers.model";
import { formatDate } from "@angular/common";
@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.sass"],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  trainersForm: FormGroup;
  trainers: Trainers;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public trainersService: TrainersService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === "edit") {
      this.dialogTitle = data.trainers.name;
      this.trainers = data.trainers;
    } else {
      this.dialogTitle = "New Trainers";
      this.trainers = new Trainers({});
    }
    this.trainersForm = this.createContactForm();
  }
  formControl = new FormControl("", [
    Validators.required,
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError("required")
      ? "Required field"
      : this.formControl.hasError("email")
      ? "Not a valid email"
      : "";
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      id: [this.trainers.id],
      img: [this.trainers.img],
      name: [this.trainers.name],
      email: [this.trainers.email],
      date: [
        formatDate(this.trainers.date, "yyyy-MM-dd", "en"),
        [Validators.required],
      ],
      specialization: [this.trainers.specialization],
      mobile: [this.trainers.mobile],
      department: [this.trainers.department],
      degree: [this.trainers.degree],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.trainersService.addTrainers(this.trainersForm.getRawValue());
  }
}
