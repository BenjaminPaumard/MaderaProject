import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjetComponent } from "./projet.component";
import { AppComponent } from "src/app/app.component";
import { LoginComponent } from "../login/login.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { NavBarComponent } from "src/app/shared/nav-bar/nav-bar.component";
import { DevisComponent } from "../devis/devis.component";
import { DialogDeleteComponent } from "src/app/shared/dialog-delete/dialog-delete.component";
import { AddProjetDialogComponent } from "./dialog/add-projet-dialog/add-projet-dialog.component";
import { EditProjetDialogComponent } from "./dialog/edit-projet-dialog/edit-projet-dialog.component";
import { PlanComponent } from "../plan/plan.component";
import { AddPlanDialogComponent } from "../plan/dialog/add-plan-dialog/add-plan-dialog/add-plan-dialog.component";
import { EditPlanDialogComponent } from "../plan/dialog/edit-plan-dialog/edit-plan-dialog/edit-plan-dialog.component";
import { GestionStockComponent } from "../gestion-stock/gestion-stock.component";
import { SnackBarComponent } from "src/app/shared/snack-bar/snack-bar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "src/app/app-routing.module";
import { MaterialModule } from "src/app/material-module";
import { MatTableModule } from "@angular/material";
import { ClientComponent } from "../client/client.component";

describe("ProjetComponent", () => {
  let component: ProjetComponent;
  let fixture: ComponentFixture<ProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        PageNotFoundComponent,
        NavBarComponent,
        DevisComponent,
        DialogDeleteComponent,
        ProjetComponent,
        NavBarComponent,
        AddProjetDialogComponent,
        EditProjetDialogComponent,
        PlanComponent,
        AddPlanDialogComponent,
        EditPlanDialogComponent,
        GestionStockComponent,
        SnackBarComponent,
        ClientComponent
      ],
      imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MaterialModule,
        MatTableModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
