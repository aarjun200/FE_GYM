import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.sass"],
})
export class AddUserComponent {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      first: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      last: [""],
      gender: ["", [Validators.required]],
      mobile: [""],
      dob: ["", [Validators.required]],
      age: [""],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      maritalStatus: [""],
      address: [""],
      bGroup: [""],
      bPresure: [""],
      sugger: [""],
      injury: [""],
      uploadImg: [""],
    });
  }
  onSubmit() {
    console.log("Form Value", this.userForm.value);
  }
}
