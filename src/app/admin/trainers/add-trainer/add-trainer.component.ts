import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-add-trainer",
  templateUrl: "./add-trainer.component.html",
  styleUrls: ["./add-trainer.component.sass"],
})
export class AddTrainerComponent {
  docForm: FormGroup;
  hide3 = true;
  agree3 = false;
  constructor(private fb: FormBuilder) {
    this.docForm = this.fb.group({
      first: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      last: [""],
      gender: ["", [Validators.required]],
      mobile: ["", [Validators.required]],
      password: ["", [Validators.required]],
      conformPassword: ["", [Validators.required]],
      designation: [""],
      department: [""],
      address: [""],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      dob: ["", [Validators.required]],
      education: [""],
      uploadImg: [""],
    });
  }
  onSubmit() {
    console.log("Form Value", this.docForm.value);
  }
}
