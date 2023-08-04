import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlltrainersComponent } from "./alltrainers/alltrainers.component";
import { AddTrainerComponent } from "./add-trainer/add-trainer.component";
import { Page404Component } from "../../authentication/page404/page404.component";
const routes: Routes = [
  {
    path: "allTrainers",
    component: AlltrainersComponent,
  },
  {
    path: "add-trainer",
    component: AddTrainerComponent,
  },
  { path: "**", component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainersRoutingModule {}
