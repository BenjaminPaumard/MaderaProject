import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VoirDevisComponent } from "./voir-devis.component";
import { AppComponent } from "src/app/app.component";
import { LoginComponent } from "../../login/login.component";
import { PageNotFoundComponent } from "../../page-not-found/page-not-found.component";
import { NavBarComponent } from "src/app/shared/nav-bar/nav-bar.component";
import { DevisComponent } from "../devis.component";
import { DialogDeleteComponent } from "src/app/shared/dialog-delete/dialog-delete.component";
import { ProjetComponent } from "../../projet/projet.component";
import { AddProjetDialogComponent } from "../../projet/dialog/add-projet-dialog/add-projet-dialog.component";
import { EditProjetDialogComponent } from "../../projet/dialog/edit-projet-dialog/edit-projet-dialog.component";
import { PlanComponent } from "../../plan/plan.component";
import { AddPlanDialogComponent } from "../../plan/dialog/add-plan-dialog/add-plan-dialog/add-plan-dialog.component";
import { EditPlanDialogComponent } from "../../plan/dialog/edit-plan-dialog/edit-plan-dialog/edit-plan-dialog.component";
import { GestionStockComponent } from "../../gestion-stock/gestion-stock.component";
import { SnackBarComponent } from "src/app/shared/snack-bar/snack-bar.component";
import { ClientComponent } from "../../client/client.component";
import { AddClientDialogComponent } from "../../client/dialog/add-client-dialog/add-client-dialog.component";
import { EditClientDialogComponent } from "../../client/dialog/edit-client-dialog/edit-client-dialog.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "src/app/app-routing.module";
import { MaterialModule } from "src/app/material-module";
import { MatTableModule } from "@angular/material";

describe("VoirDevisComponent", () => {
  let component: VoirDevisComponent;
  let fixture: ComponentFixture<VoirDevisComponent>;

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
        ClientComponent,
        AddClientDialogComponent,
        EditClientDialogComponent,
        VoirDevisComponent,
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
    fixture = TestBed.createComponent(VoirDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
