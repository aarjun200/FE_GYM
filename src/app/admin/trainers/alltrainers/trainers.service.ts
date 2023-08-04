import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Trainers } from "./trainers.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
@Injectable()
export class TrainersService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = "assets/data/trainers.json";
  isTblLoading = true;
  dataChange: BehaviorSubject<Trainers[]> = new BehaviorSubject<Trainers[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Trainers[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllTrainerss(): void {
    this.subs.sink = this.httpClient.get<Trainers[]>(this.API_URL).subscribe(
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
  addTrainers(trainers: Trainers): void {
    this.dialogData = trainers;

    /*  this.httpClient.post(this.API_URL, trainers).subscribe(data => {
      this.dialogData = trainers;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateTrainers(trainers: Trainers): void {
    this.dialogData = trainers;

    /* this.httpClient.put(this.API_URL + trainers.id, trainers).subscribe(data => {
      this.dialogData = trainers;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteTrainers(id: number): void {
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
