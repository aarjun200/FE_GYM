import { AddUserComponent } from "./add-user/add-user.component";
import { AllusersComponent } from "./allusers/allusers.component";
import { Page404Component } from "../../authentication/page404/page404.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "all-users",
    component: AllusersComponent,
  },
  {
    path: "add-user",
    component: AddUserComponent,
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
