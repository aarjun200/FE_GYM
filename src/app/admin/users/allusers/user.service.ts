import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "./user.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
@Injectable()
export class UserService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = "assets/data/user.json";
  isTblLoading = true;
  dataChange: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): User[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllUsers(): void {
    this.subs.sink = this.httpClient.get<User[]>(this.API_URL).subscribe(
      (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + " " + error.message);
      }
    );
  }
  addUser(user: User): void {
    this.dialogData = user;

    /*  this.httpClient.post(this.API_URL, user).subscribe(data => {
      this.dialogData = user;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateUser(user: User): void {
    this.dialogData = user;

    /* this.httpClient.put(this.API_URL + user.id, user).subscribe(data => {
      this.dialogData = user;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteUser(id: number): void {
    console.log(id);

    /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(id);
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );*/
  }
}
